module.exports = {
  delay: 20,
  qbittorrentUrl: "http://qbittorrent.default.svc.cluster.local",
  torznab: [
    "http://prowlarr.default.svc.cluster.local/49/api?apikey={{ .PROWLARR__API_KEY }}", // atr
    "http://prowlarr.default.svc.cluster.local/47/api?apikey={{ .PROWLARR__API_KEY }}", // ar
    "http://prowlarr.default.svc.cluster.local/48/api?apikey={{ .PROWLARR__API_KEY }}", // ant
    "http://prowlarr.default.svc.cluster.local/2/api?apikey={{ .PROWLARR__API_KEY }}",  // avz
    "http://prowlarr.default.svc.cluster.local/45/api?apikey={{ .PROWLARR__API_KEY }}", // bhd
    "http://prowlarr.default.svc.cluster.local/21/api?apikey={{ .PROWLARR__API_KEY }}", // blu
    "http://prowlarr.default.svc.cluster.local/11/api?apikey={{ .PROWLARR__API_KEY }}", // btn
    "http://prowlarr.default.svc.cluster.local/1/api?apikey={{ .PROWLARR__API_KEY }}",  // fl
    "http://prowlarr.default.svc.cluster.local/39/api?apikey={{ .PROWLARR__API_KEY }}", // hds
    "http://prowlarr.default.svc.cluster.local/44/api?apikey={{ .PROWLARR__API_KEY }}", // hdt
    "http://prowlarr.default.svc.cluster.local/38/api?apikey={{ .PROWLARR__API_KEY }}", // ipt
    "http://prowlarr.default.svc.cluster.local/26/api?apikey={{ .PROWLARR__API_KEY }}", // mtv
    "http://prowlarr.default.svc.cluster.local/84/api?apikey={{ .PROWLARR__API_KEY }}", // nbl
    "http://prowlarr.default.svc.cluster.local/8/api?apikey={{ .PROWLARR__API_KEY }}",  // ptp
    "http://prowlarr.default.svc.cluster.local/42/api?apikey={{ .PROWLARR__API_KEY }}", // phd
    "http://prowlarr.default.svc.cluster.local/6/api?apikey={{ .PROWLARR__API_KEY }}",  // st
    "http://prowlarr.default.svc.cluster.local/46/api?apikey={{ .PROWLARR__API_KEY }}", // td
    "http://prowlarr.default.svc.cluster.local/41/api?apikey={{ .PROWLARR__API_KEY }}", // ts
    "http://prowlarr.default.svc.cluster.local/20/api?apikey={{ .PROWLARR__API_KEY }}", // tl
    "http://prowlarr.default.svc.cluster.local/40/api?apikey={{ .PROWLARR__API_KEY }}", // uhdb
  ],
  port: 80,
  apiAuth: false,
  action: "inject",
  includeEpisodes: false,
  includeSingleEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,
  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",
  linkDir: "/media/Downloads/qbittorrent/complete/cross-seed",
  dataDirs: [
    "/media/Downloads/qbittorrent/complete/prowlarr",
    "/media/Downloads/qbittorrent/complete/radarr",
    "/media/Downloads/qbittorrent/complete/sonarr",
  ],
  maxDataDepth: 1,
  outputDir: "/config/xseeds",
  torrentDir: "/config/qBittorrent/BT_backup",
};
