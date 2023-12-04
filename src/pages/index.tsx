// pages/index.tsx
import React from 'react';
import Button from '@/components/Button';

const Home: React.FC = () => {
	return (<>
	<div className="text-center hover:bg-gray-300 p-96">
		<h1 className="hover:text-green-800">Witaj na stronie gównej!</h1>
		<Button text="Kliknij mnie" onClick={() => alert('Przycisk kliknięty!')} />
	</div>
	</>);
};

export default Home;
