const emailTemplet = (otpCode) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <title>Document</title>
        <style>
          @font-face {
            font-family: "Raleway";
            font-style: normal;
            font-weight: 400;
            src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-Regular.ttf")
              format("truetype");
          }
    
          @font-face {
            font-family: "Raleway";
            font-style: normal;
            font-weight: 600;
            src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-Medium.ttf")
              format("truetype");
          }
    
          @font-face {
            font-family: "Raleway";
            font-style: normal;
            font-weight: bold;
            src: url("https://raghadsacademy.com/wp-content/uploads/2021/temp/raleway/Raleway-SemiBold.ttf")
              format("truetype");
          }
    
          body {
            margin: 0px;
            padding: 0px;
            font-family: Raleway, sans-serif;
          }
    
          .table-1 {
            width: 100%;
            height: 1024px;
            padding: 100px 100px;
            background-color: #efefef;
          }
    
          .table-2 {
            width: 600px;
            height: 822px;
            padding: 20.5px 0 24.7px;
          }
    
          .table-img-1 {
            width: 105.5px;
            height: 18.8px;
            margin: 0 247.7px 24.2px 246.7px;
            object-fit: contain;
          }
    
          .table-content {
            width: 416px;
            height: 419.8px;
          }
    
          .table-img-2 {
            width: 72px;
            height: 72px;
            padding: 7.5px 7.3px 7.5px 7.5px;
            margin-bottom: 24.5px;
          }
    
          .text-1 {
            width: 100%;
            margin: 0 0 12px;
            font-size: 32px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
          }
    
          .text-2 {
            width: 100%;
            margin: 12px 0 0;
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            text-align: center;
            color: #828282;
          }
    
          .text-3 {
            width: 100%;
            margin: 0 0 32px;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            color: #ffffff;
          }
    
          .text-4 {
            width: 100%;
            margin: 23.5px 0 0;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
          }
    
          .container-1 {
            width: 290px;
            height: 76.5px;
          }
    
          .password-text {
            width: 200px;
            height: 16px;
            margin-top: 0;
            margin-bottom: 12.5px;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffa726;
          }
    
          .table-border {
            padding: 9.5px 64px;
            border-radius: 8px;
            border: solid 1px #ffa726;
          }
    
          .password-contriner {
            width: 162px;
            height: 29px;
            font-size: 24px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
          }
        </style>
      </head>
    
      <body style="padding: 0; margin: 0">
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="table-1"
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                bgcolor="#26153f"
                class="table-2"
              >
                <tr>
                  <td align="center">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="table-img-1"
                    >
                      <tr>
                        <td>
                          <img
                            src="https://i.ibb.co/jfx4XR0/emaillogo.png"
                            alt="logo-image "
                          />
                        </td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr>
                        <td
                          height="1"
                          bgcolor="#422b64"
                          style="
                            border: none;
                            border-bottom: 1px solid #422b64;
                            font-size: 1px;
                            line-height: 1px;
                            width: 602px;
                          "
                        ></td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="empty-table-1"
                    >
                      <tr>
                        <td
                          style="width: 600px; height: 100px; margin: 0; padding: 0"
                        >
                          <p
                            style="
                              width: 600px;
                              height: 100px;
                              margin: 0;
                              padding: 0;
                            "
                          ></p>
                        </td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="table-content"
                    >
                      <tr>
                        <td align="center">
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="table-img-2"
                          >
                            <tr>
                              <td align="center">
                                <img
                                  src="https://ttdev.fra1.digitaloceanspaces.com/email-lock2021-12-26T13:22:49.229.png"
                                  alt="email-lock"
                                />
                              </td>
                            </tr>
                          </table>
    
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text-1"
                          >
                            <tr>
                              <td align="center">Reset password</td>
                            </tr>
                          </table>
    
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text-2"
                          >
                            <tr>
                              <td align="center">
                                This is a temporary OTP code you can use it to<br />reset
                                your password
                              </td>
                            </tr>
                          </table>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="empty-table-1"
                          >
                            <tr>
                              <td
                                style="
                                  width: 416px;
                                  height: 40.8px;
                                  margin: 0;
                                  padding: 0;
                                "
                              >
                                <p
                                  style="
                                    height: 40.8px;
                                    width: 416px;
                                    margin: 0;
                                    padding: 0;
                                  "
                                ></p>
                              </td>
                            </tr>
                          </table>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="container-1"
                          >
                            <tr>
                              <td align="center">
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="password-text"
                                >
                                  <tr>
                                    <td align="center">Your OTP Code</td>
                                  </tr>
                                </table>
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="table-border"
                                >
                                  <tr>
                                    <td align="center">
                                      <table
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="password-contriner"
                                      >
                                        <tr>
                                          <td align="center">${otpCode}</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="empty-table-1"
                          >
                            <tr>
                              <td
                                style="
                                  width: 416px;
                                  height: 40.5x;
                                  margin: 0;
                                  padding: 0;
                                "
                              >
                                <p
                                  style="
                                    width: 416px;
                                    height: 40.5px;
                                    margin: 0;
                                    padding: 0;
                                  "
                                ></p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="empty-table-1"
                    >
                      <tr>
                        <td
                          style="
                            width: 600px;
                            height: 100.5px;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <p
                            style="
                              width: 600px;
                              height: 100.1px;
                              margin: 0;
                              padding: 0;
                            "
                          ></p>
                        </td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="text-3"
                    >
                      <tr>
                        <td align="center">
                          Please do not reply to this message. if you have any
                          questions,<br />please
                          <a
                            href="mailto:mustafaalowisi@gmail.com"
                            target="_blank"
                            style="
                              text-decoration: unset;
                              color: #37c2cc;
                              border-bottom: 1px solid #37c2cc;
                              padding-bottom: 1px;
                            "
                            rel="noopener"
                            >Contact us.</a
                          >
                        </td>
                      </tr>
                    </table>
    
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr>
                        <td
                          height="1"
                          bgcolor="#422b64"
                          style="
                            border: none;
                            border-bottom: 1px solid #422b64;
                            font-size: 1px;
                            line-height: 1px;
                            width: 602px;
                          "
                        ></td>
                      </tr>
                    </table>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="text-4"
                    >
                      <tr>
                        <td align="center">
                          © 2023 Pet Care. All Right Reserved For Mustafa & Ahmad.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
};

const TimeDiffrent = (date) => {
  const expirationTime = new Date(date);
  const currentTime = new Date();
  const differenceInMilliseconds =
    currentTime.getTime() - expirationTime.getTime();
  const differenceInSeconds = differenceInMilliseconds / 1000;
  const differenceInMinutes = differenceInSeconds / 60;
  return differenceInMinutes;
};

module.exports = { emailTemplet, TimeDiffrent };
