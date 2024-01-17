import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";

import { Comment } from "@/interfaces/comments";
import { PostActions } from "../SmallComponents";

interface CommentsSectionProps {
  comments: Comment[];
}

interface CommentDetailProps {
  comment: Comment;
}

const CommentDetail = ({ comment }: CommentDetailProps) => {
  const { body, email, name } = comment;

  return (
    <Box borderTop={1} borderColor="#A3A3A3" px={4}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
        title={name}
        subheader={`${email}`}
        subheaderTypographyProps={{
          color: "info.main",
        }}
      />
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>

      <PostActions variant="COMMENT" />
    </Box>
  );
};

export const CommentsSection = ({ comments }: CommentsSectionProps) => {
  return (
    <Box>
      {comments?.map((comment) => (
        <CommentDetail key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};
