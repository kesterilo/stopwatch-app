import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
  return (
		<div className="footer">
			<p className="footer-element">Designed by Kester Ilo &copy;</p>
			<SocialIcon
				target="_blank"
				className="footer-element"
				style={{ width: '14px', height: '14px' }}
				url="https://x.com/kester_ilo"
			/>
			<a
				className="footer-element"
				style={{ textDecoration: 'none', color: 'black' }}
				target="_blank"
        href="https://x.com/kester_ilo">
        
				@kester_ilo
			</a>
		</div>
	);
}

export default Footer