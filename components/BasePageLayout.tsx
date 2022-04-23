import React from 'react';
import Head from 'next/head';

const BasePageLayout = ({ title, children }: any) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content='Your number one finance management system'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
		</div>
	);
};

BasePageLayout.defaultProps = {
	title: 'CowVest',
};

export default BasePageLayout;
