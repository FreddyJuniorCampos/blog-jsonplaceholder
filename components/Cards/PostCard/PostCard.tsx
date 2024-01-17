import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Post } from "@/interfaces/posts";
import { CommentsSection } from "../../Sections";
import { PostActions } from "../../SmallComponents";

// Variants of Card
const VARIANTS_CARD = {
  DEFAULT: "DEFAULT",
  FULL: "FULL",
} as const;

interface PostCardProps {
  post: Post;
  variant?: (typeof VARIANTS_CARD)[keyof typeof VARIANTS_CARD];
  handleSeeMore?: () => void;
}

export const PostCard = ({
  handleSeeMore,
  post,
  variant = "DEFAULT",
}: PostCardProps) => {
  // Post data
  const { body, title, comments, userId } = post;

  return (
    <Card
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        maxWidth: variant === "DEFAULT" ? 320 : 740,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={`/assets/user${userId ?? ""}.jpeg`}
          />
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>

      <PostActions />

      <CardActions disableSpacing>
        {variant === "DEFAULT" && handleSeeMore && (
          <Button
            sx={{
              color: "info.main",
            }}
            size="small"
            onClick={handleSeeMore}
          >
            See More
          </Button>
        )}
      </CardActions>

      {variant === "FULL" && <CommentsSection comments={comments ?? []} />}
    </Card>
  );
};
