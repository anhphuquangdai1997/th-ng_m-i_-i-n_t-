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

                title="Exynos 2200 mạnh cỡ nào?"
                subheader="Jan 10, 2022"
            />
            <CardMedia
                className={classes.media}
                image="https://cdn.24h.com.vn/upload/1-2022/images/2022-01-19/Chip-cua-Samsung-co-dich-lai-Qualcomm-galaxy-s22-1642570316-213-width660height531.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Link to="/Iphonese">Ngay sau khi ra mắt, hiệu năng của Galaxy S22 Ultra dùng chip Exynos 2200 đã được đem ra so sánh với chip Snapdragon 8 Gen 1.</Link>
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
                        Vào hôm 18/1 vừa qua, Samsung đã chính thức công bố SoC của mình – Exynos 2200. Giống như các tin đồn, chip này được
                        sản xuất dựa trên lõi Armv9 mới nhất của Arm, nhanh hơn và tiết kiệm điện hơn so với thiết kế Exynos 2100 tiền nhiệm.
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
