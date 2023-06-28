import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../styles/SingleTask.css";

interface propsType {
  title: any;
  description: any;
  onDeleteHandler: (index: number) => void;
  index: number;
}
function SingleTask({ title, description, onDeleteHandler, index }: propsType) {
  console.log("tilte ", title, "dsc", description);
  const navigate = useNavigate();
  return (
    <div className="card">
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() =>
            navigate("/edit", {
              state: { title, description, index },
            })
          }
        >
          <EditIcon sx={{ color: "blue" }} />
        </Button>
        <Button onClick={() => onDeleteHandler(index)}>
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
      </CardActions>

      <CardContent className="card-content">
        <div>
          <h2>{title}</h2>
        </div>
        <div>{description}</div>
      </CardContent>
    </div>
  );
}

export default SingleTask;
