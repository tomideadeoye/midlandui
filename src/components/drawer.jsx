import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import theme from "../assets/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { navData } from "../appTextData";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	BackdropProps: {
		background: "transparent",
	},
	link: theme.links,
}));

export default function CustomDrawer() {
	const [state, setState] = React.useState({
		right: false,
	});

	const classes = useStyles();

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				height: "100%",
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{navData.map((item) => (
					<>
						<ListItem key={item.title} disablePadding>
							<ListItemButton>
								<Box src={item.icon} component="img" mr={3} />
								<Link className={classes.link}>
									<ListItemText primary={item.title} />
								</Link>
							</ListItemButton>
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</Box>
	);

	const match = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<div>
			{["right"].map((anchor) => (
				<React.Fragment key={anchor}>
					{match && (
						<MenuIcon
							onClick={toggleDrawer("right", true)}
							sx={{
								color: "#79B0B0",
							}}
						/>
					)}

					<Drawer
						ModalProps={{
							BackdropProps: {
								classes: {
									root: classes.BackdropProps,
								},
							},
						}}
						anchor={anchor}
						open={state.right}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}