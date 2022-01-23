import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard1() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader

                title="Sản phẩm sắp ra mắt 2020"
                subheader="Nov 29, 2019"
            />
            <CardMedia
                className={classes.media}
                image="https://cdn.tgdd.vn/Products/Images/42/114114/Slider/-1-thietke.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Link to="/Iphonese">iPhone SE 2020 có thiết kế mới khá giống với iPhone 8 nhưng được trang bị các công nghệ bên trong tương tự như iPhone 11.</Link>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Màn hình của máy là Liquid Retina kích thước 4.7 inch, mặt trước và sau đều bằng kính và có 3 lựa chọn màu sắc
                    </Typography>
                    <Typography paragraph>
                        Ngoài ra, tần số quét màn hình lên đến 120 Hz tăng tốc độ làm tươi và tự động điều chỉnh
                        tốc độ hiển thị để phù hợp với mọi chuyển động của nội dung hiển thị, các hoạt cảnh phim
                        phát ra mượt mà, bắt mắt, đặc biệt đạt hiệu quả rõ rệt khi thực hiện các lệnh tùy chỉnh
                        trên các ứng dụng đồ họa hay giải trí cực đã.
                    </Typography>
                    <Typography paragraph>
                        Dải màu Wide color (P3) với 1 tỷ màu tái tạo màu sắc tuyệt vời, độ tương phản cao cho màu sắc
                        luôn rực rỡ, tươi mới kết hợp cùng công nghệ True Tone tự động điều chỉnh màu sắc và độ sáng
                        sao cho phù hợp với môi trường đang sử dụng, đảm bảo chất lượng hình ảnh luôn hiển thị chính
                        xác, chân thực nhất.
                    </Typography>
                    <Typography>
                        Tận hưởng không gian giải trí hoàn hảo với hệ thống âm thanh 6
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
