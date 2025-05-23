// import imagen from "../assets/shopping-store.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Paper, CardHeader, IconButton } from "@mui/material";

function CardProduct({title, img, price, description}) {

  const shortTitle = title?.split(" ", 3).join(" ")

  return (
    <Paper sx={{ maxWidth: 230 }} elevation={4}>
      <Card sx={{ backgroundColor: "#dafcfc" }}>
        <CardHeader
          subheader={shortTitle}
          action={
            <IconButton color="info" aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
          }          
        />
        <CardMedia
          component="img"
          alt="green iguana"
          height="160"
          src={img}
        />
        <CardContent sx={{ textAlign: "left", maxHeight: 170 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", pb:1 }}
          >
            <Typography
              noWrap
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={600}
            >
              ${price}
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={1.5}
              precision={0.5}
              sx={{ pb: 0.3, justifyContent: "end" }}
            />
          </Stack>
          <Typography
            className="truncText"
            variant="body2"
            sx={{
              color: "text.secondary",
              minHeight: 50,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="info"
            size="small"
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Paper>
  );
}

export default CardProduct;
