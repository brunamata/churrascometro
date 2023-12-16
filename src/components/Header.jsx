const Header = () => {

    return (
        <>
            <div class="theme-container">
                <label id="label-theme-text" for="input-theme">Tema Escuro</label>
                <label class="switch">
                    <input type="checkbox" id="input-theme" checked="checked"/>
                        <span class="slider"/>
                </label>
            </div>
            <h1>Churrascômetro</h1>
        </>
    )
}

export default Header;