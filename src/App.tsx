import React from 'react';
import './App.css';

function App() {
    return (
        <div className={"all"}>
            <div className={"wrapper"}>
                <header className={"header"}>
                    <aside className={"sidebar"}>
                        <span className={"sidebar-item"}><img className={"img-sidebar"}
                                                              src="https://gc.onliner.by/images/i-fire-orange.png"
                                                              alt="fire"/>Каталог</span>
                        <span className={"sidebar-item"}>Новости</span>
                        <span className={"sidebar-item"}><img className={"img-sidebar"}
                                                              src="https://gc.onliner.by/images/i-ab-advert-specific.png"
                                                              alt="car"/>Автобарахолка</span>
                        <span className={"sidebar-item"}>Дома и квартиры</span>
                        <span className={"sidebar-item"}>Услуги</span>
                        <span className={"sidebar-item"}>Барахолка</span>
                        <span className={"sidebar-item"}>Форум</span>
                    </aside>
                    <div className={"header-body"}>
                        <span className={"header-item"}><img className={"img-header"}
                                                             src="https://gc.onliner.by/images/i-clover.png"
                                                             alt="card"/>Onlíner Клевер</span>
                        <span className={`header-item green`}>$ 2,5810</span>
                        <span className={`header-item gray`}>Погода: +19</span>
                        <span className={"header-age"}>18+</span>
                    </div>
                </header>
                <nav className={"nav"}>
                    <div className={"nav-up"}>
                        <img className={"logo"}
                             src="https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?1653040822"
                             alt="logo"/>
                        <input className={"search-input"} placeholder={"Поиск в Каталоге. Например, \"...\" "}
                               type="text"></input>
                        <div className={"login"}>
                            <button type={"button"} className={"entry-button"}>Войти</button>
                            <button className={`header-image-button fb`}></button>
                            <button className={`header-image-button vk`}></button>
                            <button className={`header-image-button gg`}></button>
                        </div>
                        <button className={`header-image-button cart`}></button>
                    </div>
                    <div className={"nav-down"}>
                        <div className={"prime"}>
                            <img className={"prime-image"} src="https://gc.onliner.by/images/i-prime-arrow.png"
                                 alt="prime"/>
                            <div className={"prime-text"}>Призы за покупки с Prime!</div>
                        </div>
                        <div className={"symbol"}>|</div>
                        <div className={"nav-down-text"}>Триммеры</div>
                        <div className={"nav-down-text"}>Газонокосилки</div>
                        <div className={"nav-down-text"}>Водонагреватели</div>
                        <div className={"nav-down-text"}>Батуты</div>
                        <div className={"nav-down-text"}>Мойки высокого давления</div>
                        <div className={"nav-down-text"}>Беспроводные и портативные колонки</div>
                        <div className={"nav-down-text"}>Мангалы, грили, барбекю</div>
                    </div>
                </nav>
                <section className={"content"}>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/mZBKNy77Sjodww9R8NdVSan3noDyqlAvYlwn0qLN8cU/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L3Rp/bGVzLzF4MS8xMGEx/NGQ2ZDkwMjQ5MTFi/NDA2NDNlZDQ1Yjhm/YTVlZC5qcGVn.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>
                            <div className={"text-content-weight"}>Украина</div>
                            <div>Девяносто девятый день</div>
                        </div>
                    </div>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/qqw8HoeUbtZhZbmp6_Cqqph7FxNQOCVeKSkluaYUeeE/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L25l/d3Mvb3JpZ2luYWwv/OWE3MjFiZWE3YjQ3/Y2E5OWU5MzVmMzUw/MDhhYThiZTQuanBl/Zw.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>
                            <div>Что нового в доставке Onliner Prime? Рассказываем</div>
                        </div>
                    </div>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/TRKB_HLFsRNCYXjJuRb1kXIhsLy-WwMZDOJm_rgD2bE/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L3Rp/bGVzLzF4MS82YjU4/MDFhOGE1NzlhNzlj/NzAwYzFlMDQ3YjZl/M2JhOS5qcGVn.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>
                            <div className={"text-content-weight"}>Планшеты от 170 р.</div>
                            <div>Более 400 моделей</div>
                        </div>
                    </div>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/wyVYuUqT5ZkvOVWAcAqMs5FvUCFANydLzQiXpluPvgU/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L25l/d3Mvb3JpZ2luYWwv/MjUzNzVmMTlkNzIz/ZGY2ZGYzMjY5OTg4/ZjYzM2QzNWYuanBl/Zw.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>Наши читатели о самых диких способах похудеть</div>
                    </div>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/CO2LEYxKgXgbT6sx_o9L3OBR7OrFaVWVS_aG0o7M7Io/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L25l/d3Mvb3JpZ2luYWwv/NDA2NjIyOGFiNmRj/NzI0OTBjOTcxZjcx/NzYxODA4ZTcuanBl/Zw.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>Работает час в день. Получает $3 тысячи.</div>
                    </div>
                    <div className={"content-item"}><img
                        src="https://imgproxy.onliner.by/RU7NL0I3EVcdPMcaMRngSuzbVaXFMATmyo9NAZ8k5oE/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L25l/d3Mvb3JpZ2luYWwv/NjJlYjdiZjY0MWI4/MTM2NmY3NDY3NjM3/YzI4YThlMjYuanBl/Zw.webp"
                        alt="pcr"/>
                        <div className={"text-content"}>Сможете решить эту задачку для советских школьников?</div>
                    </div>
                    <div className={"content-item"}>8</div>
                    <div className={"content-item"}>9</div>
                    <div className={"content-item"}>10</div>
                    <div className={"content-item"}>11</div>
                    <div className={"content-item"}>12</div>
                </section>
            </div>
        </div>
    );
}

export default App;
