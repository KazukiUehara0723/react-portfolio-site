import universe from '../images/universe.jpg';
import boy from '../images/boy.jpg';
import {FaTwitter,FaGithub} from 'react-icons/fa';


export const Header = () => {
	const componentName = () => 'Header';
	return (
		<header className="main-cover" style={{backgroundImage:`url(${universe})`}}>
			{/* overlayはカバー画像の上に透過して表示される背景要素です */}
			<div className="overlay"></div>
			<div className="container">
				<div className="display-table">
					<div className="display-table-contents">
						{/* カバー画像 */}
						<div className="profile-thumb" style={{backgroundImage:`url(${boy})`}}></div>
						{/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
						<h1 className="title-text">あなたの名前</h1>
						<h3 className="title-text">あなたの肩書</h3>
						<ul className='social-icons'>
							<li className='icon-linl'>
								{/* リンク先(href)は任意のURLを設定してください */}
								<a href="https://twitter.com/">
									<FaTwitter color="blue" size="2rem" />
								</a>
							</li>
							<li className='icon-linl'>
								{/* リンク先(href)は任意のURLを設定してください */}
								<a href="https://github.com/">
									<FaGithub color="blue" size="2rem" />
								</a>

							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};