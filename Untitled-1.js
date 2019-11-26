]따릉이 = loc => {
    var lat = String(getlat(loc));
    var lng = String(getlng(loc));
    JSON.parse(

      org.jsoup.Jsoup.connect(apihref).ignoreContentType(true).get().text())
      .rentBikeStatus.row.filter(v => v.stationLatitude.match((lat))).filter(v => v.stationLatitude.match(String(getlat(loc))))
      .map(
        v => v.stationName + " | (" + v.parkingBikeTotCnt + "/" + v.shared + ")"
      )
      .join("\n");
  };