// 只安裝網站用到的 Swiper 模組（輪播自動播放）；loop、breakpoints 屬於核心功能
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

Swiper.use([Autoplay]);
