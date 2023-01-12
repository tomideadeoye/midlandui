import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { navData } from "../appTextData";
import CustomDrawer from "./drawer";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "auto",
		width: "20%",
		top: 0,
		left: 0,
		background: theme.palette.white.main,
		padding: theme.spacing(3, 3, 3, 1),
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	navItem: {
		padding: theme.spacing(1, 1, 1, 1),
		borderRadius: "10px",
		cursor: "pointer",

		"&:hover": {
			background: theme.palette.green[100],
			"& > img": {
				filter:
					"invert(34%) sepia(73%) saturate(865%) hue-rotate(139deg) brightness(53%) contrast(102%)",

				fill: theme.palette.green[200],
			},
		},
	},
	navText: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "19px",
		color: theme.palette.green[200],

		"&:hover": {
			fontWeight: 800,
		},
	},

	logo: {
		"&:hover": {
			filter:
				"invert(34%) sepia(73%) saturate(865%) hue-rotate(139deg) brightness(53%) contrast(102%)",
		},
	},
}));

export default function SideNav() {
	const styles = useStyles();
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

	function mobileFooter() {
		return (
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				height="100%"
				padding={2}
				maxWidth="60%"
			>
				<CustomDrawer />
				<Box
					component="img"
					alt="cloud bank logo"
					src="../svg/smalllogo.svg"
					width="60px"
					className={styles.logo}
				/>
			</Stack>
		);
	}

	function desktopFooter() {
		return (
			<Stack className={styles.container}>
				<Stack>
					<Box
						component="img"
						alt="cloud bank logo"
						src="../svg/cloudbank-1@2x.png"
						width="150px"
						mb={3}
						className={styles.logo}
					/>
					<Stack justifyContent="space-between">
						{navData.map((item, index) => (
							<Stack
								key={index}
								alignItems="center"
								direction="row"
								className={styles.navItem}
								spacing={1}
							>
								<Box
									component="img"
									className={styles.icon}
									src={item.icon}
									alt={item.title}
								/>

								<p className={styles.navText}>{item.title}</p>
							</Stack>
						))}
					</Stack>
				</Stack>
				<Stack
					alignItems="center"
					direction="row"
					className={styles.navItem}
					spacing={2}
				>
					<Box
						component="img"
						className={styles.icon}
						src="../svg/turnoff-1.svg"
						alt="Log out"
					/>
					<p className={styles.navText}>Log out</p>
				</Stack>
			</Stack>
		);
	}

	return <>{isMobile ? mobileFooter() : desktopFooter()}</>;
}
