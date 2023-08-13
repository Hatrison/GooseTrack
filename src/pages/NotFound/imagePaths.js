const imagePaths = {
  webp2xMob: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-mob-2x.webp`),
  webp1xMob: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-mob-1x.webp`),
  png2xMob: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-mob-2x.png`),
  png1xMob: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-mob-1x.png`),
  webp2xTabDesk: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-tab-desk-2x.webp`),
  webp1xTabDesk: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-tab-desk-1x.webp`),
  png2xTabDesk: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-tab-desk-2x.png`),
  png1xTabDesk: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-tab-desk-1x.png`),
};

export default imagePaths;
