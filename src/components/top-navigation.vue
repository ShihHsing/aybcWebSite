<template>
    <div id="top-navigation">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="3" :lg="2">
                <el-row type="flex" justify="center">
                    <router-link to="/首页">
                        <img src=".././assets/img/logo-min.png" alt="logo">
                    </router-link>
                </el-row>
            </el-col>
            <el-col :xs="1" :sm="7" :md="11" :lg="15">
                &nbsp;
            </el-col>
            <el-col :xs="9" :sm="5" :md="4" :lg="3">
                <el-row type="flex" justify="center">
                    <el-dropdown menu-align="start" trigger="click">
                        <span class="el-dropdown-link">
                            <h1>
                                哎哟不错机器人
                            </h1>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/aybcRobot/basisFunction">
                                    <h3>
                                        基础功能
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/aybcRobot/usingScenario">
                                    <h3>
                                        场景运用
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/hardware">
                                    <h3>
                                        硬件
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/aybcRobot/parameter">
                                    <h3>
                                        参数
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                            <!-- <el-dropdown-item>
                            <router-link to="/aybcRobot/publicityVideo">
                            <h3>产品宣传视频</h3>
                            </router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                            <router-link to="/aybcRobot/installVideo">
                            <h3>产品安装视频</h3>
                            </router-link>
                            </el-dropdown-item> -->
                            <el-dropdown-item>
                                <router-link to="/aybcRobot/order">
                                    <h3>
                                        招商政策
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </el-col>
            <el-col :xs="4" :sm="4" :md="3" :lg="2">
                <el-row type="flex" justify="center">
                    <el-dropdown menu-align="start" trigger="click">
                        <span class="el-dropdown-link">
                            <h2>
                                &nbsp;&nbsp;&nbsp;&nbsp;配件
                            </h2>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/aybcRobot/diagnostic">
                                    <h3>
                                        心电心率
                                    </h3>
                                </router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </el-col>
            <el-col :xs="6" :sm="4" :md="3" :lg="2">
                <el-row type="flex" justify="center">
                    <el-dropdown menu-align="start" trigger="click">
                        <span class="el-dropdown-link">
                            <h2>
                                &nbsp;&nbsp;&nbsp;APP下载
                            </h2>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <h3 @click="aybc3dg = true">
                                    哎哟不错3D购
                                </h3>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <h3 @click="aybcck = true">
                                    哎哟不错储客
                                </h3>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </el-col>
        </el-row>
        <el-dialog v-model="aybc3dg" size="tiny">
            <div class="aybc3dg">
                <div class="close">
                    <button @click="aybc3dg = false"></button>
                </div>
                <div class="body">
                    <div class="body_left">
                        <div class="slider_wrap">
                            <el-carousel class="slider" :interval="2000">
                                <el-carousel-item key="1">
                                    <img src="../assets/img/aybc3dg/aybc3dg1-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="2">
                                    <img src="../assets/img/aybc3dg/aybc3dg2-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="3">
                                    <img src="../assets/img/aybc3dg/aybc3dg3-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="4">
                                    <img src="../assets/img/aybc3dg/aybc3dg4-min.png">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div class="body_right">
                        <p>哎哟不错3D购</p>
                        <p>哎哟不错3D购是哎哟不错机器人科研有限公司旗下的一款移动购物体验平台。借助AR、即时通讯和数据匹配技术构建用户专属3D模特，为用户真实、便捷地展示了服装的穿着效果，同时进行商品精准推荐，为用户带来更好的购物体验。</p>
                        <div class="qrcode">
                            <li>
                                <img src="../assets/img/aybc3dg/aybc3dgqr_code_iphone-min.png" height="150" width="150">
                                <p>iPhone下载</p>
                            </li>
                            <li>
                                <img src="../assets/img/aybc3dg/aybc3dgqr_code_android-min.png" height="150" width="150">
                                <p>Android下载</p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog v-model="aybcck" size="tiny">
            <div class="aybcck">
                <div class="close">
                    <button @click="aybcck = false"></button>
                </div>
                <div class="body">
                    <div class="body_left">
                        <div class="slider_wrap">
                            <el-carousel class="slider" :interval="4000">
                                <el-carousel-item key="1">
                                    <img src="../assets/img/aybcck/aybcck1-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="2">
                                    <img src="../assets/img/aybcck/aybcck2-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="3">
                                    <img src="../assets/img/aybcck/aybcck3-min.png">
                                </el-carousel-item>
                                <el-carousel-item key="4">
                                    <img src="../assets/img/aybcck/aybcck4-min.png">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div class="body_right">
                        <p>哎哟不错储客</p>
                        <p>哎哟不错储客是哎哟不错机器人科研有限公司旗下的一款针对门店管理会员的APP。主要体现在：业绩统计更简洁，让员工成果直接明了。业绩期望更有效，让目标实现尽在眼前，运营管理更有效，让下属工作同步到位。思维 传播更方便，让运营思维触手可及。</p>
                        <div class="qrcode">
                            <li>
                                <img src="../assets/img/aybcck/aybcckqr_code_iphone-min.png" height="150" width="150">
                                <p>iPhone下载</p>
                            </li>
                            <li>
                                <img src="../assets/img/aybcck/aybcckqr_code_android-min.png" height="150" width="150">
                                <p>Android下载</p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="less">
    .el-dialog{
        width: auto!important;
        .el-dialog__header{
            display: none;
        }
        .el-dialog__body{
            padding: 0;
        }
    }
</style>

<script>
import '.././assets/less/top-navigation.less'
export default{
    name: 'top-navigation',
    data () {
        return {
            aybc3dg: false,
            aybcck: false
        }
    },
    created: function () {},
    methods: {}
}
</script>
