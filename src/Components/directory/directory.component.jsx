import React from 'react';

import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'cloths',
                imageUrl: 'https://unsplash.com/photos/knKm7u_7Ihw',
                id: 1
            },
            {
                title: 'sneakers',
                imageUrl: 'https://www.shutterstock.com/search/shoe+store',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7c%2F4d%2Fdc%2F7c4ddc7bb0af14873c2977a5e75e9bfa.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F58617232627516039%2F&docid=K6PwDrBRj83lMM&tbnid=bCrkrbPh3u7kiM%3A&vet=10ahUKEwiyl56OgOfjAhWVD2MBHSR6DooQMwhCKAEwAQ..i&w=712&h=950&bih=588&biw=1366&q=images%20of%20clothing%20boutiques%20hats&ved=0ahUKEwiyl56OgOfjAhWVD2MBHSR6DooQMwhCKAEwAQ&iact=mrc&uact=8',
                id: 1
            },
            {
                title: 'shoes',
                imageUrl: 'https://www.shutterstock.com/image-photo/sport-shoes-565500208',
                id: 1
            },
            {
                title: 'hats',
                imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7c%2F4d%2Fdc%2F7c4ddc7bb0af14873c2977a5e75e9bfa.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F58617232627516039%2F&docid=K6PwDrBRj83lMM&tbnid=bCrkrbPh3u7kiM%3A&vet=10ahUKEwiyl56OgOfjAhWVD2MBHSR6DooQMwhCKAEwAQ..i&w=712&h=950&bih=588&biw=1366&q=images%20of%20clothing%20boutiques%20hats&ved=0ahUKEwiyl56OgOfjAhWVD2MBHSR6DooQMwhCKAEwAQ&iact=mrc&uact=8',
                id: 1
            }]
        }
    }
    render () {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title }/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;