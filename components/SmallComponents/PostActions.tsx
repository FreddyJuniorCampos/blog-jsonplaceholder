import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { TbHeart, TbMessageCircle, TbRepeat, TbShare } from "react-icons/tb";
import Typography from "@mui/material/Typography";

// Variants of Card
const VARIANTS_POST_ACTIONS = {
  DEFAULT: "DEFAULT",
  COMMENT: "COMMENT",
} as const;

interface PostActionsProps {
  variant?: (typeof VARIANTS_POST_ACTIONS)[keyof typeof VARIANTS_POST_ACTIONS];
}

export const PostActions = ({ variant = "DEFAULT" }: PostActionsProps) => {
  return (
    <Stack spacing={2} justifyContent="center">
      {variant === "DEFAULT" && (
        <Stack direction="row" gap={1} pl={2}>
          <Stack direction="row" gap={1}>
            <Typography fontWeight={600}>3</Typography>
            <Typography color="gray">Repost</Typography>
          </Stack>

          <Stack direction="row" gap={1}>
            <Typography fontWeight={600}>1</Typography>
            <Typography color="gray">Quote</Typography>
          </Stack>

          <Stack direction="row" gap={1}>
            <Typography fontWeight={600}>259</Typography>
            <Typography color="gray">Likes</Typography>
          </Stack>
        </Stack>
      )}

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton aria-label="messagge" color="inherit">
          <TbMessageCircle />
          {variant === "COMMENT" && <Typography ml={0.2}>{12}</Typography>}
        </IconButton>

        <Stack direction="row" alignItems="center">
          <IconButton aria-label="heart" color="inherit">
            <TbHeart />
          </IconButton>
          {variant === "COMMENT" && <Typography ml={0.2}>{300}</Typography>}
        </Stack>

        <IconButton aria-label="repeat" color="inherit">
          <TbRepeat />
          {variant === "COMMENT" && <Typography ml={0.2}>{40}</Typography>}
        </IconButton>

        <IconButton aria-label="share" color="inherit">
          <TbShare />
        </IconButton>
      </Stack>
    </Stack>
  );
};
