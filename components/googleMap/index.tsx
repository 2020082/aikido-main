import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import styles from "./visit.module.css";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function MapGoogle() {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] justify-center flex ">
      <div className={styles.text}>
        <a>{t("visit.gettinghere")}</a>
        <br />
        <p>{t("visit.gettinghere.description")}</p>
        <br />

        <a>{t("visit.airportpickup")}</a>
        <br />
        <p>{t("visit.airportpickup.description")}</p>
        <br />

        <a>{t("visit.publictransportation")}</a>
        <br />
        <p>{t("visit.publictransportation.description")}</p>
        <br />

        <a>{t("visit.bycar")}</a>
        <p>{t("visit.bycar.description")}</p>
      </div>

      <div className={styles.location}>
        <div className="w-[60%] h-[90%] flex items-center p-10 relative left-30 top-5">
          <LoadScript
            googleMapsApiKey="AIzaSyDpxO3C-vyVGkFjK8Bvc8PfenC09dvzYIE"
            language="en"
          >
            <div style={{ height: "100%", width: "100%" }}>
              <GoogleMap
                center={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
                zoom={15}
                mapContainerStyle={{ height: "100%", width: "100%" }}
              >
                {/* Add Marker component */}
                <Marker
                  position={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
                  title="Mongolia International University"
                />
              </GoogleMap>
            </div>
          </LoadScript>
        </div>

        <div className="relative top-[-0.5%] flex items-center">
          <Button
            endIcon={<ArrowForward />}
            variant="contained"
            href="https://www.google.com/maps/place/Mongolia+International+University/@47.9146792,106.9711992,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96919485d76a77:0xc3c65e3fb66fde11!8m2!3d47.9146756!4d106.9737741!16s%2Fm%2F02x0l38?entry=ttu"
            target="_blank"
          >
            {t("visit.seemoredetail")}
          </Button>
        </div>
      </div>
    </div>
  );
}
