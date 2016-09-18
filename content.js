(function(){
  var ad_removal_pid;
  const remove_ads = () =>{
    var ad_vids = document.getElementsByClassName("ad-showing")[0];
    if (!ad_vids){
      return
    }
    var vids = ad_vids.getElementsByTagName("video");
    for (var _i in vids){
      var vid = vids[_i];
      vid.currentTime = vid.seekable.end(0);
    }
  }
  const start_ad_removal = () => {
    ad_removal_pid = setInterval(remove_ads, 1000);
  }
  const stop_ad_removal = () => window.clearTimeout(ad_removal_pid);

  //TOOD: hotkeys for speedup and slowdown?
  const set_replay_speed = (speed) => {
    var vids = document.getElementsByTagName("video")[0];
    for (var _i in vids){
      vids[_i].playbackRate = speed;
    }
  }
  const delta_replay_speed = (delta) => {
    var vids = document.getElementsByTagName("video")[0];
    for (var _i in vids){
      vids[_i].playbackRate += delta;
    }
  }

  // MAIN
  start_ad_removal();
})();
