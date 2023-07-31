<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Xv;qC93<Cf6yDQ,Xj5^V;Kqv,4TB8=+=dzT=f6LOWDLWJm>I-yP9*(T.A{Y~Cu81' );
define( 'SECURE_AUTH_KEY',  '^yM}*l2Kn2xgew8D<#XGF-Kv{v$pstK+v0b?laN4wfV]gI^uJ8Zy3, _8FI~wZ1&' );
define( 'LOGGED_IN_KEY',    '>u!QuS (3,P0FaqU}%l/||<.Y[4qjHaQHwE1g|?)+,,p^CIO_0h~RRsuDT4P[z&X' );
define( 'NONCE_KEY',        '_4C.Z;VMLfYzz1_<vTG-l7?v~t6-sqQKg+E^o(E)GtZ.!<*HP7h5]Zk9|T/g7| }' );
define( 'AUTH_SALT',        '@w/65uzI=5=d4p[(hmRzv0Ns Gp(%}8l;iz?0J<X}T:A()@G!/kvnokvYP{Ypo<Q' );
define( 'SECURE_AUTH_SALT', 'wBacvYDa-{dT/Q+qU[Nh_+)2w@:[6XS^ :|NcbR-Am~bNBUHqV n9(?@#F9or)o~' );
define( 'LOGGED_IN_SALT',   '52-&6l}TjR%A L;s?rddox:|;52WZ{?op8udev&S4*LZ}CB6|I.-x4s8p/i-`xM1' );
define( 'NONCE_SALT',       'p-7$}46)Nglmv7MBC<4C$HT]Ea[!o,$w/ )H2<DSJ*T^An]p:&1^,g(3`RUW0mKQ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
