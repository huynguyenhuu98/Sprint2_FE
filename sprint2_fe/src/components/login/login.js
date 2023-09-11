import "../login/login.css"
export function Login() {
return(
    <>
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
                <div className="loginbackground box-background--white padding-top--64">
                    <div className="loginbackground-gridContainer">
                        <div className="box-root flex-flex" style="grid-area: top / start / 8 / end;">
                            <div className="box-root"
                                 style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
                            </div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
                            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
                            <div className="box-root box-background--blue800" style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
                            <div className="box-root box-background--blue animationLeftRight"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
                            <div className="box-root box-background--gray100 animationLeftRight tans3s"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
                            <div className="box-root box-background--cyan200 animationRightLeft tans4s"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
                            <div className="box-root box-background--blue animationRightLeft"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
                            <div className="box-root box-background--gray100 animationRightLeft tans4s"
                                 style="flex-grow: 1;"></div>
                        </div>
                        <div className="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
                            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                                 style="flex-grow: 1;"></div>
                        </div>
                    </div>
                </div>
                <div className="box-root padding-top--24 flex-flex flex-direction--column"
                     style="flex-grow: 1; z-index: 9;">
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <h1 className="h1-login"><a className="a-login" href="http://blog.stackfindover.com/"
                                                    rel="dofollow">DANA BIKE</a></h1>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <form id="stripe-login">
                                    <div className="field padding-bottom--24">
                                        <label className="label-login" htmlFor="email" style="font-size: 16px">Tên đăng
                                            nhập</label>
                                        <input type="email" name="email" id="email"/>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <div className="grid--50-50">
                                            <label className="label-login" htmlFor="password" style="font-size: 16px">Mật
                                                khẩu</label>
                                            <div className="reset-pass" id="password">
                                                <a className="a-login" href="#">Quên mật khẩu?</a>
                                            </div>
                                        </div>
                                        <input type="password" name="password"/>
                                    </div>
                                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                        <label className="label-login" htmlFor="checkbox" style="font-size: 13px">
                                            <input id="checkbox" type="checkbox" name="checkbox"/> Nhớ mật khẩu
                                        </label>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="submit" value="Continue"/>
                                    </div>
                                    <div className="field">
                                        <a className="ssolink a-login" href="#">Dùng tài khoản facebook để đăng
                                            nhập </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer-link padding-top--24">
                            <span className="span-login">Bạn chưa có tài khoản? <a className="a-login"
                                                                                   href="">Đăng kí </a></span>
                            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                <span className="span-login"><a className="a-login" href="#">© Dana Bike</a></span>
                                <span className="span-login"><a className="a-login" href="#">Liên hệ </a></span>
                                <span className="span-login"><a className="a-login"
                                                                href="#">Quyền riêng tư - điều khoản</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}