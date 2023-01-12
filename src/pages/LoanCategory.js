import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import SideNav from "../components/nav";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.default,
	},

	itemBox: {
		backgroundColor: theme.palette.white.main,
		minHeight: "25rem",
		borderRadius: "1rem",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: "1rem",
		padding: "2rem 0rem",
		"&:hover": {
			boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		},
		[theme.breakpoints.down("md")]: {
			minHeight: "23rem",
		},
	},
	description: theme.typography.h4,
	title: theme.typography.h3,
	loans: theme.typography.h1,
	day: theme.typography.h3,
	icon: {
		width: "100%",
		maxHeight: "150px",
		[theme.breakpoints.down("md")]: {
			width: "60%",
		},
	},
}));

const dataBox = [
	{
		title: "One Month Loan",
		description: "Access funds for personal upkeep for 30 days only",
		icon: "../svg/oneMonth.svg",
	},
	{
		title: "Working Capital Overdraft",
		description:
			"Access continuous funds to grow your business stocks and inventory",
		icon: "../svg/working-capital-overdraft.svg",
	},
	{
		title: "Operation Overdraft",
		description: "Financing for your business operations",
		icon: "../svg/operation-overdraft.svg",
	},
	{
		title: "T and T Spread Loan",
		description:
			"Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market",
		icon: "../svg/tt.svg",
	},
	{
		title: "Infrastrusture Loan",
		description: `	Facility for your business to purchase vehicles, assets, and building upgrades.`,
		icon: "../svg/infrastructure.svg",
	},
	{
		title: "Personal Loan",
		description: "Instant funds for your personal expenses.",
		icon: "../svg/personal.svg",
	},
	{
		title: "Pawn Loan",
		description:
			"Get cash value on temporary sale of your items within 72hours.",
		icon: "../svg/pawn.svg",
	},
	{
		title: "FX Line",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		icon: "../svg/frame-33.svg",
	},
];

const LoanCategory = () => {
	const styles = useStyles();
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
	return (
		<Stack direction={isMobile ? "column" : "row"} className={styles.container}>
			<SideNav />
			<Stack p={3} spacing={2}>
				<h1 className={styles.loans}>Loans</h1>

				<Stack direction="row" alignItems="center">
					<p className={styles.day}>Monday</p>
					<span className={styles.date}>, 21st February, 2021</span>
				</Stack>

				<Box>
					<Grid
						container
						spacing={2}
						sx={{
							height: "100%",
						}}
					>
						{dataBox.map((item, index) => (
							<Grid item xs={6} sm={6} md={4} lg={3} key={index} spacing={2}>
								<Stack className={styles.itemBox}>
									<Box
										component="img"
										className={styles.icon}
										src={item.icon}
									/>
									<Box
										textAlign="center"
										className={styles.title}
										sx={isMobile && { fontSize: ".8rem" }}
									>
										{item.title}
									</Box>
									<Box
										component="p"
										className={styles.description}
										maxWidth="80%"
										textAlign="center"
										sx={isMobile && { fontSize: ".8rem" }}
									>
										{item.description}
									</Box>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Box>
			</Stack>
		</Stack>
	);
};

export default LoanCategory;
