export const SectionContactForm = () => {
    return (
        <section class="contact-form common-background">
        <div class="info-box">
            <h1>Contactemos</h1>
            <a href="https://www.facebook.com/profile.php?id=61558544442719"><h2><i class="fa-brands fa-facebook"></i>Facebook</h2></a>
            <a href="https://x.com/gonzaleosuarez"><h2><i class="fa-brands fa-x-twitter"></i>X</h2></a>
            <a href="https://www.instagram.com/gonzaleosuarez/"><h2><i class="fa-brands fa-instagram"></i>Instagram</h2></a>
            <a href="https://github.com/gonzaleosuarez"><h2><i class="fa-brands fa-github"></i>Github</h2></a>
            <a href="https://discord.com/channels/@me"><h2><i class="fa-brands fa-discord"></i>Discord</h2></a>
           
        </div>
        <div class="box">
            <h1>Formulario de contacto</h1>
            <div class="input-group">
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Email"/>
            </div>
            <input type="text" placeholder="Asunto"/>
            <textarea placeholder="Mensaje"></textarea>
            <button>Enviarme un mensaje</button>
        </div>
    </section>
    )
}

export default SectionContactForm;