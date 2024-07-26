export const SectionAbout = () => {
    return (
        <section id="about" class="about">
        <h1>Sobre Mi</h1>
        <div class="flex-container">
            <div>
                <img src="assets/pexels-cottonbro-2773562.jpg" alt=""/>
            </div>
            <div class="text-container">
                <h1>¡Hola!</h1>
                <p>Soy un estudiante con algo de experiencia previa en C# y Java. Actualmente me estoy enfocando principalmente en el desarrollo web, trabajando con HTML, CSS y JavaScript para crear sitios web atractivos y funcionales.</p>
                <div class="about-container">
                    <div class="info-box">
                        <h1>Nombre:</h1>
                        <p>Gonzalo Leonel Suárez</p>
                    </div>
                    <div class="info-box">
                        <h1>Email:</h1>
                        <p>gonzaleosuarez@gmail.com</p>
                    </div>
                    <div class="info-box">
                        <h1>Telefono:</h1>
                        <p>+1 908-736-1801</p>
                    </div>
                    <div class="info-box">
                        <h1>Twitter:</h1>
                        <p>gonzaleosuarez</p>
                    </div>
                </div>
                <div class="contact-container">
                    <h1 class="contact-me">CONTACTAME <i class="fa-solid fa-arrow-right"></i></h1>
                    <button class="download-cv"><i class="fa-solid fa-download"></i> DESCARGAR CV</button>
                </div>
            </div>
        </div>
        <div class="image-box">
            <h1>Trabajemos juntos en tu proximo proyecto</h1>
            <img src="assets/pexels-iliescu-victor-95204-306198.jpg" alt=""/>
        </div>
    </section>
    );
}

export default SectionAbout;