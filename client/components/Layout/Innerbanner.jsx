import React from 'react';
import { breadCrumbDetails } from './breadcrumbs';
import { useRouter } from 'next/router';
import Link from 'next/link'

const propTypes = {};
const defaultProps = {};

const Innerbanner = () => {
const router = useRouter();


	const rawRoute = router.asPath.split("/");
	console.log("rawRoute", rawRoute);
	let pageName = rawRoute[rawRoute.length - 1];
	if (pageName.includes('?')) {
		pageName  = pageName.split('?')[0];
	} else if (pageName.includes('#')) {
		pageName  = pageName.split('#')[0];
	}
	console.log(pageName)
	console.log("pageName12", breadCrumbDetails[pageName]);
	const { bimage, bTitle, bcontent } = breadCrumbDetails[pageName];
	// const { bimage, bTitle, bcontent } = breadCrumbDetails.default;
    const fallBackPage = ["business-overview", "sdfg", "fgh"];
	// console.log('routerrouterrouter', pageName);

	const generateBreadCrumbTitle = (ind, name) => {
		const nameToDisplay = (!ind ? 'home' : name);
		console.log('Breadcrumb', nameToDisplay);
		if(nameToDisplay=='rd')
		{
			return 'R&D'
		}
		else if(nameToDisplay=='api')
		{
			return 'API'
		}
		else if(nameToDisplay=='mr-k-raghunathan')
		{
			return 'Mr. K. Ragunathan'
		}
		else if(nameToDisplay=='mr-k-nityananda-reddy')
		{
			return 'Mr. K. Nityananda Reddy'
		}
		else if(nameToDisplay=='mr-p-v-ram-prasad-reddy')
		{
			return 'Mr. P. V Ram Prasad Reddy'
		}
		else if(nameToDisplay=='dr-m-sivakumaran')
		{
			return 'Dr. M. Sivakumaran'
		}
		else if(nameToDisplay=='mr-m-madan-mohan-reddy')
		{
			return 'Mr. M. Madan Mohan Reddy'
		}
		else if(nameToDisplay=='mr-p-sarath-chandra-reddy')
		{
			return 'Mr. P. Sarath Chandra Reddy'
		}
		else if(nameToDisplay=='dr-(mrs)-avnit-bimal-singh')
		{
			return 'Dr. (Mrs.) Avnit Bimal Singh'
		}
		else if(nameToDisplay=='mrs-savita-mahajan')
		{
			return 'Mrs. Savita Mahajan'
		}
		else if(nameToDisplay=='mr-girish-paman-vanvari')
		{
			return 'Mr. Girish Paman Vanvari'
		}

		else if(nameToDisplay=='hr-mission-and-vision')
		{
			return 'HR Mission and Vision'
		}
		else if(nameToDisplay=='2021-2')
		{
			return '2021'
		}
		else if(nameToDisplay=='2019-2020')
		{
			return '2019-2020'
		}
		else if(nameToDisplay=='670-2')
		{
			return '2017-2018'
		}
		else if(nameToDisplay=='2014-16')
		{
			return '2014 -2016'
		}
		else if(nameToDisplay=='2013-2')
		{
			return '2010-2011'
		}
		else if(nameToDisplay=='2009-12')
		{
			return '2007-2008'
		}
		else if(nameToDisplay=='2006-08')
		{
			return '2005-2006'
		}
		else if(nameToDisplay=='1992-2006')
		{
			return '2004-2005'
		}
		else if(nameToDisplay=='2003-2004')
		{
			return '2003-2004'
		}
		else if(nameToDisplay=='2001-2002-2')
		{
			return '2001-2002'
		}
		else if(nameToDisplay=='1999-2000')
		{
			return '1999-2000'
		}
		else if(nameToDisplay=='1997-1998')
		{
			return '1997-1998'
		}
		else if(nameToDisplay=='1994-1995')
		{
			return '1994-1995'
		}
		else if(nameToDisplay=='1992-1993')
		{
			return '1992-1993'
		}
		else if(nameToDisplay=='1988-189')
		{
			return '1988-1989'
		}
		else if(nameToDisplay=='1988-189')
		{
			return '1988-1989'
		}
		else if(nameToDisplay=='1986-2')
		{
			return '1986'
		} 
		else if (nameToDisplay.startsWith("member?member=")) {
			let memberName = nameToDisplay.split("=")[1];
			return "Member / " + memberName.split("-").join(" ");
		}
		else if (nameToDisplay.startsWith("search?searchText=")) {
			let memberName = nameToDisplay.split("=")[1];
			return "Search / " + memberName;
		}
		


		else{
		console.log(nameToDisplay + "******")
		return nameToDisplay.split("-").join(" ");
		}
	}

	const navigateOnClick = (selectedPath) => {
	const pathToNavigate = selectedPath === "" ? "/" : breadCrumbDetails[selectedPath].path[selectedPath];
		router.push(pathToNavigate);

	}

	const generateHref = (i, name) => {
		console.log('Path name-1', i, name)
		var path="/"
		if(!i) {
			path = "/";
		} else if(i === rawRoute.length - 1) {
			path = router.asPath;
		} else {
			if (typeof breadCrumbDetails[pageName].path[name] !== "undefined" ) {
				path = breadCrumbDetails[pageName].path[name]
			}
		}
		console.log('Path itaration', i, path)
		return path
	}

	return (
		<>
			{/* <section id="page-title" className="page-title-parallax page-title-dark" style={{ backgroundImage: `url(require(${bimage})` }} > */}
			<section id="page-title" className="page-title-parallax page-title-dark" style={{ backgroundImage: `url(${bimage})` }} >
				<div className="container clearfix"> 
					<h1 dangerouslySetInnerHTML={{ __html: bTitle }}></h1>
					<h6 dangerouslySetInnerHTML={{ __html: bcontent }}></h6>
					<ol className="breadcrumb">
						{rawRoute.map((name, i) => 
							<li className={`breadcrumb-item ${(i === rawRoute.length - 1) ? 'active' : ''}`}>
									{/* {name === "" ? "/" : breadCrumbDetails[name].path[name]} */}
								<Link href={generateHref(i,name)}>
									<a className={`${(i === rawRoute.length - 1) ? 'navactive' : ''}`} >{generateBreadCrumbTitle(i, name)}</a>
								</Link>								
							</li>
						)}
					</ol>
				</div>
			</section>

		</>
	);
}

Innerbanner.propTypes = propTypes;
Innerbanner.defaultProps = defaultProps;

export default Innerbanner;