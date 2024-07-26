import SectionContactForm from './SectionContactForm';
import SectionContactHeader from './SectionContactHeader';
export const SectionContact = () => {
    return (
        <section id="contact" class="background-container">
            <SectionContactHeader/>
            <SectionContactForm/>

        </section>
    )
}

export default SectionContact;