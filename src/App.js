import React, { useState } from "react";
import { SectionsContainer, Section } from 'react-fullpage';
import ServiceMainPage from "./pages/ServiceMainPage/ServiceMainPage";
import ServiceFooterPage from "./pages/ServiceFooterPage/ServiceFooterPage";
import ServiceReviewsPage from "./pages/ServiceReviewsPage/ServiceReviewsPage";
import ServiceNumberPage from "./pages/ServiceNumberPage/ServiceNumberPage";
import ServiceTeamPage from "./pages/ServiceTeamPage/ServiceTeamPage";
import './App.scss';
import NavBar from "./components/Navbar/NavBar";

const App = () => {
    const anchors = ['1', '2', '3', '4', '5'];

    const [isFirstOrLast, setIsFirstOrLast] = useState(true);

    let options = {
        sectionClassName: 'section',
        anchors: anchors,
        scrollBar: false,
        navigation: isFirstOrLast ? false : true,
        showActiveTooltip: true,
        verticalAlign: false,
        delay: 770,
    };

    function addDiagonalAnim(array) {
        array.forEach((ele) => (
            ele.classList.add('diagonalBoxAnim'))
        )
    }

    function removeDiagonalAnim(array) {
        array.forEach((ele) => (
            ele.classList.remove('diagonalBoxAnim'))
        )
    }


    const handlePopstate = () => {
        const currentUrl = window.location.href;
        const lastChar = Number(currentUrl[currentUrl.length - 1]);
        const sections = document.querySelectorAll(".section");
        const sectionsLength = sections.length;
        const navbar = document.querySelector(".navBar");
        const bgBox = document.querySelector(".bgBox");
        const diagonalBoxs = document.querySelectorAll(".diagonalBox");

        switch (lastChar) {
            case sectionsLength:
                removeDiagonalAnim(diagonalBoxs);
                navbar.style.transition = 'opacity 1s';
                navbar.style.opacity = '0';
                setIsFirstOrLast(true);
                break;
            case 1:
                navbar.style.opacity = '1';
                setIsFirstOrLast(true);
                bgBox.classList.remove("show");
                break;
            case 2:
                setIsFirstOrLast(false);
                bgBox.classList.add('show');
                break;
            case 3:
                setIsFirstOrLast(false);
                bgBox.classList.remove('show');
                removeDiagonalAnim(diagonalBoxs);
                break;
            case 4:
                navbar.style.opacity = '1';
                setIsFirstOrLast(false);
                addDiagonalAnim(diagonalBoxs);
                break;
            default:
                break;
        }
    }

    window.addEventListener('popstate', handlePopstate);
    return (
        <div>
            {/* <ScrollToTopOnMount /> */}
            <NavBar />
            <SectionsContainer {...options}>
                <Section><ServiceMainPage /></Section>
                <Section><ServiceReviewsPage /></Section>
                <Section><ServiceNumberPage /></Section>
                <Section><ServiceTeamPage /></Section>
                <Section><ServiceFooterPage /></Section>
            </SectionsContainer>

        </div>
    )
}

export default App;

