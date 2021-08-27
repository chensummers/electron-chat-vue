export default {
    width: 1200, //整数型 (可选) - 窗口的宽度（以像素为单位）。 默认值为 800。
    height: 600, // 整数型 (可选) - 窗口的高度（以像素为单位）。 默认值为 600。
    x: 0,// Interger (可选) - (必选 如果使用了y) 窗口相对于屏幕左侧的偏移量。 默认值为将窗口居中。
    y: 0,// Integer (可选) - (必选 如果使用了x) 窗口相对于屏幕顶端的偏移量。 默认值为将窗口居中。
    useContentSize: true,// Boolean (可选) - width 和 height 将设置为 web 页面的尺寸(译注: 不包含边框), 这意味着窗口的实际尺寸将包括窗口边框的大小，稍微会大一点。 默认值为 false.
    center: true,// Boolean (可选) - 窗口是否在屏幕居中.整型（可选）-窗口的最小宽度。默认为0 默认值为 0.
    minHeight: 600,// Integer(可选) - 窗口的最小高度。 默认值为 0.
    maxWidth: 1200,// Integer(可选)-窗口的最大宽度。 默认值不限
    maxHeight: 600,// Integer (可选) - 窗口的最大高度。 默认值不限
    resizable: true,// Boolean (可选) - 窗口大小是否可调整。 默认值为 true。
    movable: true,// Boolean (可选) - 窗口是否可以移动. 该属性在Linux上未实现。 默认值为 true。
    minimizable: false,// Boolean (可选) - 窗口是否可最小化。 该属性在Linux上未实现。 默认值为 true。
    maximizable: false,// Boolean (可选) - 窗口是否可最大化。 该属性在Linux上未实现。 默认值为 true。
    closable: true,// Boolean (可选) - 窗口是否可关闭。 该属性在Linux上未实现。 默认值为 true。
    focusable: true,// Boolean (可选) - 窗口是否可以聚焦. 默认值为 true。 在 Windows 中设置 focusable: false 也意味着设置了skipTaskbar: true. 在 Linux 中设置 focusable: false 时窗口停止与 wm 交互, 并且窗口将始终置顶。
    alwaysOnTop: true,// Boolean (可选) - 窗口是否永远在别的窗口的上面。 默认值为 false.
    fullscreen: false,// Boolean (可选) - 窗口是否全屏. 当明确设置为 false 时，在 macOS 上全屏的按钮将被隐藏或禁用. 默认值为 false.
    fullscreenable: false,// Boolean (可选) - 窗口是否可以进入全屏状态. 在 macOS上, 最大化/缩放按钮是否可用 默认值为 true。
    simpleFullscreen: false,// Boolean (可选) - 在 macOS 上使用 pre-Lion 全屏。 默认值为 false.
    skipTaskbar: true,// Boolean (可选) - 是否在任务栏中显示窗口。 默认值为 false。
    kiosk: false,// Boolean (可选) - 窗口是否进入kiosk模式。 默认值为 false.
    title: '',//(可选) - 默认窗口标题 默认为"Electron"。 如果由loadURL()加载的HTML文件中含有标签<title>，此属性将被忽略。
    icon: '',// (NativeImage | String) (可选) - 窗口的图标. 在 Windows 上推荐使用 ICO 图标来获得最佳的视觉效果, 默认使用可执行文件的图标.
    show: true,// Boolean (可选) - 窗口是否在创建时显示。 默认值为 true。
    paintWhenInitiallyHidden: false,//Boolean(可选) - 当show为false并且渲染器刚刚被创建时，它是否应激活。 为了让document.visibilityState 在show: false的情况下第一次加载时正确地工作，你应该把这个设置成false. 设置为 false 将会导致ready-to-show 事件不触发。 默认值为 true。
    frame: true,// Boolean (可选) - 设置为 false 时可以创建一个无边框窗口。 默认值为 true。
    parent: null,// BrowserWindow (可选) - 指定父窗口 默认值为 null.
    momodalable: false,// Boolean (可选) - 当前是否为模态窗口。 只有当窗口是子窗口时才起作用。 默认值为 false.
    acceptFirstMouse: false,// Boolean (可选) - 是否允许单击页面来激活窗口。 默认值为 false。
    disableAutoHideCursor: false,// Boolean (可选) - 是否在打字时隐藏光标。 默认值为 false.
    autoHideMenuBar: false,// Boolean (可选) - 自动隐藏菜单栏，除非按了Alt键。 默认值为 false.
    enableLargerThanScreen: false,// Boolean (可选) - 是否允许改变窗口的大小使之大于屏幕的尺寸. 仅适用于 macOS，因为其它操作系统默认允许 大于屏幕的窗口。 默认值为 false.
    backgroundColor: '',// String(可选) - 窗口的背景颜色为十六进制值，例如#66CD00, #FFF, #80FFFFFF (设置transparent为true方可支持alpha属性，格式为#AARRGGBB)。 默认值为 #FFF（白色）。
    hasShadow: true,//Boolean (可选) - 窗口是否有阴影. 默认值为 true。
    opacity: 1,// Number (可选)-设置窗口初始的不透明度, 介于 0.0 (完全透明) 和 1.0 (完全不透明) 之间。 目前仅支持Windows 和 macos
    darkTheme: false,// Boolean (optional) - 强制窗口使用深色主题，只在部分GTK+3桌面环境下有效。 默认值为 false.
    transparent: false,// Boolean (可选) - 使窗口 透明。 默认值为 false. 在Windows上，仅在无边框窗口下起作用。
    type: '',// String (可选) - 窗口的类型, 默认为普通窗口. 更多信息见下文
            //在 Linux 上, 可能的类型有 desktop、dock、toolbar、splash、notification。
            //在 macOS 上，可能的类型是 desktop, textured。
            //textured 类型增加金属色泽的外观 (NSTexturedBackgroundWindowMask).
            //desktop 类型将窗口置于桌面背景级别 (kCGDesktopWindowLevel - 1). 注意，桌面窗口不会接收焦点、键盘或鼠标事件，但您可以使用< 0> globalShortcut < /0 >接收快捷键的消息
            //在 Windows 上, 可能的类型为 toolbar.
    visualEffectState: '',// String (optional) - 指定material外观应如何反映macOS上的窗口活动状态。 必须与 vibrancy 属性一起使用。 可能的值有
                        //followWindow - 当窗口处于激活状态时，后台应自动显示为激活状态，当窗口处于非激活状态时，后台应自动显示为非激活状态。 默认为该值。
                        //active - 后台应一直显示为激活状态。
                        //inactive - 后台应一直显示为非激活状态。
    titleBarStyle: '',  // String (可选) - 窗口标题栏样式。 默认值为 default. 可能的值有
                    //default - 标准灰色不透明的Mac标题栏
                    //hidden - 隐藏标题栏, 内容充满整个窗口, 但它依然在左上角, 仍然受标准窗口控制.
                    //hiddenInset - 隐藏标题栏, 显示小的控制按钮在窗口边缘
                    //customButtonsOnHover - Results in a hidden title bar and a full size content window, the traffic light buttons will display when being hovered over in the top left of the window. 注意: 此选项目前是实验性的。
    trafficLightPosition: '',// Point (optional) - Set a custom position for the traffic light buttons in frameless windows.
    roundedCorners: true,// Boolean (optional) - Whether frameless window should have rounded corners on macOS. 默认值为 true。
    fullscreenWindowTitle: false,// Boolean (optional) Deprecated - Shows the title in the title bar in full screen mode on macOS for hiddenInset titleBarStyle. 默认值为 false.
    thickFrame: false,// Boolean(可选)-对 Windows 上的无框窗口使用WS_THICKFRAME 样式，会增加标准窗口框架。 设置为 false 时将移除窗口的阴影和动画. 默认值为 true。
    vibrancy: '',// String (可选) - 窗口是否使用 vibrancy 动态效果, 仅 macOS 中有效. 可选值为 appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light, ultra-dark, header, sheet, window, hud, fullscreen-ui, tooltip, content, under-window 或 under-page。 Please note that appearance-based, light, dark, medium-light, and ultra-dark are deprecated and have been removed in macOS Catalina (10.15).
    zoomToPageWidth: '',// Boolean (可选) - 控制 macOS 上，当选择性单击工具栏上的绿色stoplight按钮或单击 Window > Zoom menu item时的行为。 如果为 true, 窗口将放大到网页的本身宽度, false 将使其缩放到屏幕的宽度。 这也会影响直接调用 maximize() 时的行为。 默认值为 false.
    tabbingIdentifier: '',// String (可选) - 选项组卡的名称，在macOS 10.12+上可使窗口在原生选项卡中打开. 具有相同标识符的窗口将被组合在一起。 这还会在窗口的标签栏中添加一个原生的新选项卡按钮, 并允许 app 和窗口接收 new-window-for-tab 事件。
    webPreferences: 'Object',// Object (可选) - 网页功能设置。
                    //devTools: false, Boolean (可选) - 是否开启 DevTools. 如果设置为 false, 则无法使用 BrowserWindow.webContents.openDevTools () 打开 DevTools。 默认值为 true。
                    //nodeIntegration: false, Boolean (可选) - 是否启用Node integration. 默认值为 false.
                    //nodeIntegrationInWorker: false, Boolean (可选) - 是否在Web工作器中启用了Node集成. 默认值为 false. 更多内容参见 多线程.
                    //nodeIntegrationInSubFrames: false, Boolean (可选项)(实验性)，是否允许在子页面(iframe)或子窗口(child window)中集成Node.js； 预先加载的脚本会被注入到每一个iframe，你可以用 process.isMainFrame 来判断当前是否处于主框架（main frame）中。
                    //preload: false,// String (可选) -在页面运行其他脚本之前预先加载指定的脚本 无论页面是否集成Node, 此脚本都可以访问所有Node API 脚本路径为文件的绝对路径。 当 node integration 关闭时, 预加载的脚本将从全局范围重新引入node的全局引用标志 参考示例.
    sandbox: false,// Boolean (可选)-如果设置该参数, 沙箱的渲染器将与窗口关联, 使它与Chromium OS-level 的沙箱兼容, 并禁用 Node. js 引擎。 它与 nodeIntegration 的选项不同，且预加载脚本的 API 也有限制. 更多详情.
    enableRemoteModule: false,// Boolean (可选) - 是否启用 remote 模块。 默认值为 false.
    session: false,// Session (可选) - 设置页面的 session 而不是直接忽略 Session 对象, 也可用 partition 选项来代替，它接受一个 partition 字符串. 同时设置了session 和 partition时, session 的优先级更高. 默认使用默认的 session.
    partition: false,// String (optional) - 通过 session 的 partition 字符串来设置界面session. 如果 partition 以 persist:开头, 该页面将使用持续的 session，并在所有页面生效，且使用同一个partition. 如果没有 persist: 前缀, 页面将使用 in-memory session. 通过分配相同的 partition, 多个页可以共享同一会话。 默认使用默认的 session.
    affinity: false,// String (可选) - 当指定，具有相同affinity 的 web页面将在相同的渲染进程运行。 需要注意的是，由于渲染过程中会有代码重用，如 webPreferences的preload, sandbox 和 nodeIntegration等选项会在不同页面之间共用，即使你已经在不同页面中为同一选项设置过不同的值，它们仍会被共用。 因此，建议为affinity相同的页面，使用相同的 webPreferences 已废弃
    zoomFactor: false,// Number (可选) - 页面的默认缩放系数, 3.0 表示 300%。 默认值为 1.0.
    javascript: false,// Boolean (可选) - 是否启用 JavaScript 支持。 默认值为 true。
    webSecurity: false,// Boolean (可选) - 当设置为 false, 它将禁用同源策略 (通常用来测试网站), 如果此选项不是由开发者设置的，还会把 allowRunningInsecureContent设置为 true. 默认值为 true。
    allowRunningInsecureContent: false,// Boolean (可选) - 允许一个 https 页面运行来自http url的JavaScript, CSS 或 plugins。 默认值为 false.
    images: false,// Boolean (可选) - 允许加载图片。 默认值为 true。
    textAreasAreResizable: false,// Boolean (可选) - 允许调整 TextArea 元素大小。 默认值为 true。
    webgl: '',// Boolean (可选) - 启用 WebGL 支持。 默认值为 true。
    plugins: '',// Boolean (可选) - 是否应该启用插件。 默认值为 false.
    experimentalFeatures: '',// Boolean (可选) - 启用 Chromium 的实验功能。 默认值为 false.
    scrollBounce: '',// Boolean (可选) - 在 macOS 启用弹力动画 (橡皮筋) 效果。 默认值为 false.
    enableBlinkFeatures: '',//String(可选) - 以逗号分隔的需要启用的特性列表，譬如CSSVariables,KeyboardEventKey 在 RuntimeEnabledFeatures.json5文件中查看被支持的所有特性.
    disableBlinkFeatures: '',// String (可选) - 以 ,分隔的禁用特性列表, 如 CSSVariables,KeyboardEventKey. 在RuntimeEnabledFeatures.json5 文件中查看被支持的所有特性.
    defaultFontFamily: '',// Object (可选) - 为font-family设置默认字体。
    standard: '',// String (可选) - 默认值为 Times New Roman.
    serif: '',// String (可选) - 默认值为 Times New Roman.
    sansSerif: '',// String (可选) - 默认值为 Arial.
    monospace: '',// String (可选) - 默认值为 Courier New.
    cursive: '',// String (可选) - 默认值为 Script.
    fantasy: '',// String (可选) - 默认值为 Impact.
    defaultFontSize: '',// Integer (可选) - 默认值为 16.
    defaultMonospaceFontSize: '',// Integer (可选) - 默认值为 13.
    minimumFontSize: '',// Integer (可选) - 默认值为 0.
    defaultEncoding: '',// String (可选) - 默认值为 ISO-8859-1.
    backgroundThrottling: '',//Boolean (可选)-是否在页面成为背景时限制动画和计时器。 这也会影响到 Page Visibility API. 默认值为 true。
    offscreen: '',// Boolean (optional) - 是否绘制和渲染可视区域外的窗口. 默认值为 false. 更多详情, 请参见 offscreen rendering tutorial 。
    contextIsolation: '',// Boolean (可选) - 是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本. 默认为 true。 预加载脚本所运行的上下文环境只能访问其自身专用的文档和全局窗口，其自身一系列内置的JavaScript (Array, Object, JSON, 等等) 也是如此，这些对于已加载的内容都是不可见的。 Electron API 将只在预加载脚本中可用，在已加载页面中不可用。 这个选项应被用于加载可能不被信任的远程内容时来确保加载的内容无法篡改预加载脚本和任何正在使用的Electron api。 该选项使用的是与Chrome内容脚本相同的技术。 你可以在开发者工具Console选项卡内顶部组合框中选择 'Electron Isolated Context'条目来访问这个上下文。
    worldSafeExecuteJavaScript: '',// Boolean (可选) - 如果为true，从webFrame.executeJavaScript 返回的值将被特殊处理，以确保使用 contextIsolation 时，JS中的值安全地在两个世界之间传递。 默认值为 true。 已废弃
    nativeWindowOpen: '',// Boolean (可选) - 是否使用原生的window.open(). 默认值为 false. 除了 nodeIntegrationInSubFrames 为true时，其它情况下node integration将永远禁用。 注意: 此选项目前是实验性的。
    webviewTag: '',// Boolean (可选) - 是否启用 <webview> tag标签. 默认值为 false. 注意: 为 < webview> 配置的 preload 脚本在执行时将启用节点集成, 因此应确保远程或不受信任的内容无法创建恶意的 preload 脚本 。 可以使用 webContents 上的 will-attach-webview 事件对 preload 脚本进行剥离, 并验证或更改 <webview> 的初始设置。
    additionalArguments: '',// String - 一个将被附加到当前应用程序的渲染器进程中process.argv的字符串列表 。 可用于将少量的数据传递到渲染器进程预加载脚本中。
    safeDialogs: '',// Boolean (可选) - 是否启用浏览器样式的持续对话框保护。 默认值为 false.
    safeDialogsMessage: '',// String (可选) - 当持续对话框保护被触发时显示的消息。 如果没有定义，那么将使用缺省的消息。注意：当前缺省消息是英文，并没有本地化。
    disableDialogs: '',// Boolean (可选) - 是否完全禁用对话框。 覆盖 safeDialogs。 默认值为 false.
    navigateOnDragDrop: '',// Boolean (可选) - 将文件或链接拖放到页面上时是否触发页面跳转。 默认值为 false.
    autoplayPolicy: '',// String (可选) - 窗口中内容要使用的自动播放策略，值可以是 no-user-gesture-required, user-gesture-required, document-user-activation-required。 默认为 no-user-gesture-required。
    disableHtmlFullscreenWindowResize: '',// Boolean (可选) - 是否阻止窗口在进入 HTML 全屏时调整大小。 默认值为 false.
    accessibleTitle: '',// String (可选) - 仅提供给如屏幕读取器等辅助工具的替代标题字符串。 此字符串不直接对用户可见。
    spellcheck: '',// Boolean (可选) - 是否启用内置拼写检查器。 默认值为 true。
    enableWebSQL: '',// Boolean (可选) - 是否启用 WebSQL api。 默认值为 true。
    v8CacheOptions: '',// String (可选) - 强制 blink 使用 v8 代码缓存策略。 可接受的值为：
                    //none - 禁用代码缓存
                    //code - 基于启发式代码缓存
                    //bypassHeatCheck - 绕过启发式代码缓存，但使用懒编译。
    bypassHeatCheckAndEagerCompile: 'code',// - 与上面相同，除了编译是及时的。 默认策略是 code。
    enablePreferredSizeMode: false,// Boolean (可选) - 是否启用首选大小模式。 首选大小是包含文档布局所需的最小大小--无需滚动。 启用该属性将导致在首选大小发生变化时，在WebContents 上触发 preferred-size-changed 事件。 默认值为 false.
}