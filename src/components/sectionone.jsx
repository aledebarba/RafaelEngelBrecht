import React from 'react'
import { Section } from './themeprovider'

const SectionOne = (props) => {
    return (
        <div id="SectionOne">
            <Section className="h-100 py-4">
                <h1>{props.title ? props.title : "This is the section one title"}</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h3>Colum Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis et commodi sequi cupiditate. Placeat fugit beatae debitis similique pariatur odio dolorem amet ex, dolorum sapiente totam nostrum velit reiciendis autem vel deleniti! Modi, tenetur deserunt facere aspernatur laborum voluptatibus, ipsa alias quaerat reprehenderit nobis illo culpa eaque ratione sunt cumque repellendus. Omnis, velit. Et sed cumque reprehenderit quis? Repudiandae porro blanditiis dolore aspernatur cum voluptate ipsam. Rem corporis inventore dolores voluptas facilis sed, maiores reiciendis ipsum. Saepe, nisi! Aspernatur totam, sit repellat maiores tempore commodi praesentium in recusandae repudiandae officiis doloremque soluta! Quasi autem perferendis sunt amet. Nobis, recusandae!</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3>Colum Title</h3>
                        <p>Est ut nemo commodi dolores cumque voluptate praesentium perferendis culpa, veniam in fugit porro eum nihil sequi quod eligendi. Nihil soluta molestiae ratione porro qui commodi iusto reiciendis in? Officiis eveniet eaque illum. Corrupti repellat perferendis odio voluptate fugiat! Incidunt et ea vel maxime repudiandae doloremque animi est! Suscipit reiciendis quaerat ullam perspiciatis totam vero, recusandae illo, voluptatum repellat nemo incidunt fugiat natus rem quis doloremque delectus, libero debitis deleniti possimus? Omnis possimus aut ut molestias id, eaque nemo, dicta quidem, laudantium praesentium quo quibusdam laboriosam neque officiis consectetur beatae dolorem mollitia aspernatur amet sunt et accusantium! Unde, mollitia officia!</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}
export default SectionOne
