import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Post } from "@/interfaces/posts";

interface PostCardProps {
  post: Post;
  handleLearnMore: () => void;
}

export const PostCard = ({ handleLearnMore, post }: PostCardProps) => {
  const { body, title } = post;

  return (
    <Card className="bg-slate-800 text-white" sx={{ maxWidth: 320 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        className="text-slate-300"
        subheaderTypographyProps={{
          className: "text-blue-300",
        }}
      />
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
