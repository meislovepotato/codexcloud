import { List, ListItem, ListItemText, Box } from "@mui/material";
import Link from 'next/link'; // Assuming you're using Next.js

const Sidebar = () => {
  return (
    <Box sx={{ width: 200, borderRight: '1px solid #ccc' }}>
      <List>
        <ListItem button component={Link} href="/for-you">
          <ListItemText primary="For You" />
        </ListItem>
        <ListItem button component={Link} href="/following">
          <ListItemText primary="Following" />
        </ListItem>
        <ListItem button component={Link} href="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
