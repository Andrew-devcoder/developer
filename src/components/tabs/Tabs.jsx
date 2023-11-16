import { useState } from 'react'

import style from './Tabs.module.scss'

const Tabs = () => {

	const [toggleState, setToggleState] = useState(1)

	const toggleTab = (index) => {
		setToggleState(index)
	}

	return (
		<>

			<div className={style.layout}>

				<div className={style.container}>

					<div className={style.wrapper}>

						<div className={style.header}>
							<div
								className={toggleState === 1 ?
									`${style.tab} ${style.uiActive}` : style.tab}
								onClick={() => toggleTab(1)}
							>tab 1</div>
							<div
								className={toggleState === 2 ?
									`${style.tab} ${style.uiActive}` : style.tab}
								onClick={() => toggleTab(2)}
							>tab 2</div>
							<div
								className={toggleState === 3 ?
									`${style.tab} ${style.uiActive}` : style.tab}
								onClick={() => toggleTab(3)}
							>tab 3</div>
						</div>

						<div className={style.main}>
							<div className={toggleState === 1 ?
								`${style.content} ${style.activeContent}` : style.content}>
								<h3>title tab 1</h3>
								<hr />
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eligendi maiores ipsam, nam at enim ducimus voluptas ipsum explicabo hic pariatur dolor repellendus rem vel! Hic doloribus praesentium maiores ullam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores provident, reiciendis quia vero ab deserunt? Nam quaerat sed voluptatibus perferendis consequuntur cum adipisci fuga magni natus ipsam praesentium, amet recusandae!</p>
							</div>
							<div className={toggleState === 2 ?
								`${style.content} ${style.activeContent}` : style.content}>
								<h3>title tab 2</h3>
								<hr />
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores provident, reiciendis quia vero ab deserunt? Nam quaerat sed voluptatibus perferendis consequuntur cum adipisci fuga magni natus ipsam praesentium, amet recusandae!</p>
							</div>
							<div className={toggleState === 3 ?
								`${style.content} ${style.activeContent}` : style.content}>
								<h3>title tab 3</h3>
								<hr />

								<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa architecto alias nobis autem nisi molestiae, dignissimos nesciunt consequuntur repellendus quis magni ab i
									Assumenda perferendis . Facilis, it amet consectetur adipisicing elit. Dolores provident, reiciendis quia vero ab deserunt? Nam quaerat sed voluptatibus perferendis consequuntur cum adipisci fuga magni natus ipsam praesentium, amet recusandae!</p>
							</div>

						</div>

					</div>

					<div className={style.item}>
						<h2>title item second</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deserunt repellat enim eum, beatae perferendis sint sapiente voluptates atque. Aut quos ipsam qui reprehenderit officia necessitatibus cupiditate autem unde quibusdam!</p>
					</div>

				</div >

			</div>
		</>
	)
}

export default Tabs