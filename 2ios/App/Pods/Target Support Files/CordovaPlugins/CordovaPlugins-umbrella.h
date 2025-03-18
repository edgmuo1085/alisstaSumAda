#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "CDVAppRate.h"
#import "AppVersion.h"
#import "CDVCamera.h"
#import "CDVExif.h"
#import "CDVJpegHeaderWriter.h"
#import "UIImage+CropScaleOrientation.h"
#import "DatePicker.h"
#import "CDVDevice.h"
#import "CDVNotification.h"
#import "CDVAssetLibraryFilesystem.h"
#import "CDVFile.h"
#import "CDVLocalFilesystem.h"
#import "FileOpener2.h"
#import "Bridging-Header.h"
#import "CDVLocation.h"
#import "CDVInAppBrowserNavigationController.h"
#import "CDVInAppBrowserOptions.h"
#import "CDVWKInAppBrowser.h"
#import "CDVWKInAppBrowserUIDelegate.h"
#import "NativeStorage.h"
#import "CDVConnection.h"
#import "CDVReachability.h"
#import "CDVNetworkInterface.h"
#import "sqlite3.h"
#import "SQLitePlugin.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

