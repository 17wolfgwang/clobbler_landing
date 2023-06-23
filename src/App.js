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



    window.addEventListener('popstate', () => {
        const currentUrl = window.location.href;
        const lastChar = Number(currentUrl[currentUrl.length - 1]);
        const sections = document.querySelectorAll(".section");
        const sectionsLength = sections.length;
        const navbar = document.querySelector(".navBar");

        const bgBox = document.querySelector(".bgBox");
        if (lastChar === sectionsLength) {
            navbar.style.transition = 'opacity 1s';
            navbar.style.opacity = '0';
            setIsFirstOrLast(true);
        }
        else if (lastChar === 1) {
            setIsFirstOrLast(true);
            bgBox.classList.remove('show');
        }
        else if (lastChar === 2) {
            setIsFirstOrLast(false);
            bgBox.classList.add('show');

        }
        else if (lastChar === 3) {
            setIsFirstOrLast(false);
            bgBox.classList.remove('show');
        }
        else {
            setIsFirstOrLast(false);
            navbar.style.transition = 'opacity 1s';
            navbar.style.opacity = '1';
            // bgBox.classList.remove('show');

        }
    });



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

