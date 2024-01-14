import NextLink from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardMedia, Divider } from "@mui/material";
import { TbBuilding, TbFile3D, TbMail, TbPhone } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

import { User } from "@/interfaces";

interface UserCardProps {
  user: User;
}

interface DescriptionProps {
  description: string;
  icon: JSX.Element;
}

const Description = ({ description, icon }: DescriptionProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon} {description}
    </div>
  );
};

export const UserCard = ({ user }: UserCardProps) => {
  // User data
  const { address, name, id, username, email, phone, website, company } = user;

  return (
    <Card
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        width: "100%",
      }}
    >
      <CardMedia
        sx={{ height: 300 }}
        image={`/assets/user${id ?? ""}.jpeg`}
        title="user"
      />

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typography variant="body1" fontSize={24}>
            {name}
          </Typography>

          <Typography variant="body2" fontSize={20}>
            @{username}
          </Typography>
        </div>

        <div className="flex flex-col">
          <Typography variant="body2" fontSize={16}>
            Personal information
          </Typography>

          <Divider sx={{ marginBottom: 1, bgcolor: "#A3A3A3" }} />

          <Description description={email} icon={<TbMail />} />
          <Description description={phone} icon={<TbPhone />} />
          <Description description={website} icon={<TbFile3D />} />
          <Description description={company.name} icon={<TbBuilding />} />
          <Description
            description={`${address.city}, ${address.zipcode}, ${address.street}`}
            icon={<CiLocationOn />}
          />
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <NextLink href={`/users/${id}/posts`}>
          <Button
            sx={{
              color: "info.main",
            }}
            size="small"
          >
            See posts
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};
