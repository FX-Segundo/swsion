const Home = () => {
    return (<div className="home">
        <section className="portada relative">
            <div className="info-portada w-3/4 max-w-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="bienvenido">Bienvenido a Templo Cristiano Sión</p>
                <p className="slogan">¡El SEÑOR en Sión es grande!</p>
                <p className="cita-slogan">Salmos 99:2</p>

                <button className="boton-campus mt-6">
                    <a className="text-boton" href="#">CAMPUS PANTANAL</a>
                </button>
            </div>
        </section>

        <section id="latest-activity" className="px-20 py-12">
            <h2 className="text-center text-2xl mb-8">Nuestra última actividad la vivimos así:</h2>

            <div className="flex space-x-12">

                <div className="w-1/2 space-y-4">
                    <div className="flex space-x-4">
                        <div>
                            <img className="block w-full" src="../src/assets/img/4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="block w-full" src="../src/assets/img/4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <img className="block w-full" src="../src/assets/img/4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="block w-full" src="../src/assets/img/4.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <iframe className="w-full aspect-square rounded-lg" src="https://www.youtube.com/embed/z-h-SukQgeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

        </section>

        <section id="" className="px-32 py-12">
            <h2 className="text-center text-2xl mb-8">Ya está disponible nuestro último sermón.</h2>

            <div className="flex space-x-40">
                <div className="w-1/2">
                    <iframe className="w-full aspect-square rounded-lg h-96" src="https://www.youtube.com/embed/cer-wUSBMJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-1/2">
                    <p className="text-4xl p-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus cum delectus molestias nihil quod perspiciatis eos necessitatibus architecto, magnam maiores repellat autem voluptas excepturi.
                    </p>
                </div>
            </div>
        </section>

    </div>)
}
export default Home;