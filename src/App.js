import React, { useState } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';

export default () => {
	const [activeContent, setContent] = useState(false);

	const updateContent = (id) => setContent(id);

	return (
		<div className='app layout'>
			<div className='layout-content'>
				<Navigation 
					updateContent={updateContent}
					/>

				<Content 
					activeContent={activeContent}
					/>
			</div>

			<Footer />
		</div>
	)
}