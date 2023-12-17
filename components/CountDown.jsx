
function countdownTimer() {
    return (
        <>
            <div className="countdown">
                <div className="time-section" id="hours">
                    <div className="time-group">
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom">       </div>
                                </div>
                            </div>
                        </div>
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Hours</p>
                </div>

                <div className="time-section" id="minutes">
                    <div className="time-group">
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Minutes</p>
                </div>

                <div className="time-section" id="seconds">
                    <div className="time-group">
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="time-segment">
                            <div className="segment-display">
                                <div className="segment-display__top"></div>
                                <div className="segment-display__bottom"></div>
                                <div className="segment-overlay">
                                    <div className="segment-overlay__top"></div>
                                    <div className="segment-overlay__bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Seconds</p>
                </div>
            </div>

        </>
    )
}

export default countdownTimer