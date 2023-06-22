import React, { useState, useEffect, useRef } from "react";
import { ScrollToTopOnMount, SectionsContainer, Section, Header } from 'react-fullpage';
import ServiceMainPage from "./pages/ServiceMainPage/ServiceMainPage";
// import ServiceAboutPage from "../../pages/ServiceAboutPage/ServiceAboutPage";
// import ServiceReviewsPage from "../../pages/ServiceReviewsPage/ServiceReviewsPage";
// import ServiceTeamPage from "../../pages/ServiceTeamPage/ServiceTeamPage";

import './App.scss';
import NavBar from "./components/Navbar/NavBar";

const App = () => {
    const anchors = ['section1', 'section2', 'section3', 'section4', 'section5'];

    //     const windowHeight = window.innerHeight;
    //     const documentHeight = document.documentElement.scrollHeight;
    //     const currentPosition = window.scrollY;

    let options = {
        sectionClassName: 'section',
        anchors: anchors,
        scrollBar: false,
        navigation: true,
        showActiveTooltip: true,
        verticalAlign: false,
        delay: 770,
    };

    return (
        <div>
            {/* <NavBar /> */}
            <NavBar /> {/* NavBar 가시성 조건부 렌더링 */}
            {/* <ScrollToTopOnMount /> */}
            <SectionsContainer {...options}>
                <Section><ServiceMainPage /></Section>
                <Section>Section2</Section>
                <Section>Section3</Section>
                <Section>Section4</Section>
                <Section>Footer</Section>
            </SectionsContainer>
        </div>
    )
}

export default App;

