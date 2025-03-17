import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Play } from "lucide-react";

const MyWorks = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [selectedWork, setSelectedWork] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'unset';
  };

  const myWorkVideo = [
    {
      poster: "https://i.pinimg.com/474x/27/0c/e7/270ce709a1e03746e6d0beb7e21e1bb8.jpg",
      title: "Apparel",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090228/PHULKAARI_1_z6pr3a.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090223/TANYA_1_a5xmwr.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090221/studio_3_1_ehb0fd.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090221/Sequence_02_4_1_i4c89z.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090219/studio_shoot_1_wlgngz.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090216/The_Other_Side_1_xkfjbc.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090214/Fdci_1_nlrec0.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090213/kazo_2_1_pdnyar.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090212/studio_2_1_gjtpcf.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090209/KAZO_1_rx9ikp.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090207/American_tourister_1_sxh1dn.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090207/ANGRAKHAA_1_x7dl5d.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/3e/11/a4/3e11a4886da6088e969644225ecd07d7.jpg",
      title: "Bars",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090699/Tokio_2_1_wwqsc5.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090696/BO_TAI_REEL_2_1_ftkws7.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090695/THINK_MEDIA_CAFE_ADS_REEL_1_k5w2hl.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090694/Cafe_REEL_1_1_vf3sgb.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090693/BO_TAI_REEL_1_1_akbsku.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090691/38_barracks_1_cnpn5e.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/fd/54/40/fd54409b11274973f1a513304bf4a7dc.jpg",
      title: "Brands",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090351/3K_Lights_Interior_1_m3iqvi.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090351/Showreel_Payal_Nayar_1_1_s2gmfc.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090346/H_M_REEL_1_zijlx2.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090346/TUSHAR_SIR_MAIN_INTRO_1_swxtzd.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090342/SHOES_SHOWREEL_1_rpt05u.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/06/6d/04/066d048947e5bffc0a90da830f58ffc3.jpg",
      title: "Cars",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090053/Bentley__1_mnexrw.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090053/MAYBACH_2_1_qgfgbi.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090053/Silverline_automobile__1_va5jek.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090050/Detailing_of_maybach_1_qe0c21.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090047/Porsche__1_rmiorb.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090046/Mercedes_benz__1_ht5sge.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090042/Porsche_1_dylmt5.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090041/defender-_zi403d.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090039/Lamborghini_1_uxwgc6.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090039/BMW_1_wxbfyl.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/9b/55/be/9b55be7ba42018c5d3ccfd40198f6190.jpg",
      title: "Commercials",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090410/Silverline_automobile__1_sgivme.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090408/Anand_Incorporation_1_bf9n4k.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090408/Willow_Viiew_1__1_q5gjtj.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090405/Redbull_thinkgrow_1_s3wcgl.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090404/Bold_final_under_500mb_1_ieesfa.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090402/Alqon-_efthmk.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/5a/d8/a4/5ad8a46b220f2fac4f2ecd56c8cbd606.jpg",
      title: "Gym",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090102/pool_final_without_text_1_dvstgb.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090101/POOL_REEL_1_1_ud7yav.mp4"
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/3b/c6/5f/3bc65fe29958e4481628bf9d3eadd4fa.jpg",
      title: "Influencer",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090465/niharika_1_q5q793.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090462/Tokio_2_1__1_ajopvj.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090459/ARDEE_MALL_1_no92sh.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090457/AMBIENCE_MALL-_rgpzjt.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090455/Bani_1_o79kux.mp4"
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/72/80/63/72806387da53ab47fe1facc92f9efa49.jpg",
      title: "jewellery",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090163/Silk_Jewel_1_kiy7nu.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090162/Silk_jewel_1__1_o3bzbq.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090162/Silk_jewel_2_1_raynab.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090161/Dhreya.Popli_3_1_cokj0e.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090160/Dhreya.Popli_2_1_zcnxst.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090160/Dherya.Popli-_oe2cks.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090159/Dherya.Popli_5_1_zwkppz.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090159/Dherya.popli_4_1_qo3xdg.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/30/9a/3c/309a3ca87f2a79147a63ddb28c35f9af.jpg",
      title: "Louis",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090286/diogo_male_4th_1_tm5r2q.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090285/diogo_louis_1_fib4in.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090284/diogo_copy_1_l0sg2e.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090283/diogo_5._malemp4_1_g6smmz.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090282/diogo_4th-_1_losyfv.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090281/diogo_1_1_ovokyt.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/9a/90/dc/9a90dcfa1e068acc8eb504238f80302e.jpg",
      title: "Mobile Cover",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090594/1558390261475565v_xsnfgf.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090592/1113767053165880v_qxn1tz.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090591/922402902923531v_wpaefb.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090589/922402902923531v_1_ufosn0.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090587/868096917510531v_pevrt4.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090585/780806006720149v_rqi5t5.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090584/483611971186358v_pyo3ss.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090635/SaveClip.App_AQMDwjSjR-yn2yqs01IxsKdNubp8nlBfQoGOEGPjZ34pkJjH2G_jfxNSuWQRvfJ2RBY_Fp_LMWPLTPJPR5I5BA8rnmD7Vk5J0Okg3f0_gtphkt.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090637/SaveClip.App_AQMp0-ihvRDGfac_z2pyJv7w33202SNKcCAMxcy0EIHB754rbsa1jFDWzYx_H2iAG7VAvIybQ_NzkLiIrZB4A49Iar2iJgwvoI3_Beo_ylvn4k.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090638/SaveClip.App_AQMQ5tsKYNPCx4CPBDTa2z4niYqqWmWUdchk-H05WkuXpmUNx5VkpQIKMRBPUK5BOHnZtH2a_XChf4sHZ8aXPF5OsSGmuuJAHfCvxCM_dlucb3.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090640/SaveClip.App_AQOWZUN958XFu1H6IOf9HOc2CIQQ7KDgJTSsv8tegE7QFHNNbVbxnpPqeBAQs1iKdP6Wq3wFGP0maT_IbAd1nPfXlBBG6w1wVLtYbi8_hq5kll.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090642/SaveClip.App_AQPmLBOMznqHMhcr5Q1mT41oZXuWrIoHz1UTX96_vhevZwsee43gXEIb5i-uFjNDvVmmpza42zVew-GqFKAKPQCFO8JDkzhPNC65ogY_omgt9d.mp4",
      ],
    },
    {
      poster: "https://i.pinimg.com/474x/13/48/9c/13489ce8e1ede4630f4ab29b1a338fa0.jpg",
      title: "Products",
      videosPopUp: [
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090756/Studio_mesai_1_gwfoaq.mp4",
        "https://res.cloudinary.com/do3vcfcdx/video/upload/v1741090754/Studio_Justhumain-_ngypvf.mp4"
      ],
    },
  ];

  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      className="w-full bg-gradient-to-b from-[#043148] to-[#033047] py-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        transition: { duration: 0.6 }
      }}
    >
      <motion.div 
        className="text-center relative w-fit mx-auto mb-12 group"
        whileHover="hover"
      >
        <h2 className="text-4xl font-bold text-white relative z-10">My Work</h2>
        <motion.div
          className="absolute left-0 bottom-1 h-1 bg-red-500"
          initial={{ width: "30%" }}
          variants={{
            hover: { width: "100%" }
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {myWorkVideo.map((work, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleWorkClick(work)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={work.poster} 
              alt={work.title} 
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
              >
                <Play className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-xl font-medium text-center">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center p-6 z-50 backdrop-blur-sm"
          >
            <motion.button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors duration-200"
              onClick={handleCloseModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-7xl h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <h2 className="text-center text-white text-4xl font-bold mb-8">
                {selectedWork.title}
                <motion.div
                  className="h-1 w-24 bg-red-500 mx-auto mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.2 }}
                />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {selectedWork.videosPopUp.map((video, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative rounded-lg overflow-hidden shadow-lg group"
                  >
                    <video
                      src={video}
                      className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyWorks;