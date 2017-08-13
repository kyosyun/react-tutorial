###Markdown parser は remarkable を使います。
$ npm install remarkable --save



##npm

##bitbucket

##EJS の テンプレートエンジン でHTMLの要素を設定します。


##router.get router.post


##routes##
リクエストに対してのレスポンスの定義を行う。
　APIの定義も可能。
app.jsどのリクエストのときにどのJSをつかうのかを定義する。


##Hot Module Replacement ##

##webpack-dev-server##
$ npm install webpack webpack-dev-server --save-dev
$ npm install babel-core babel-loader babel-preset-react --save-dev
$ npm install jquery --save-dev


## babelrc ##

##webpack.config.js##
###entry###
ビルドの起点となるファイルパス
複数指定が可能
さまざまなファイルをRequireしているふぁいるのこと
http://dackdive.hateblo.jp/entry/2016/04/13/123000

###output###
output.path = filepath for build module
output.filename = filename for build module
can use [name]
ex)
filename: '[name].bundle.js'  // entry の key (module1, module2) が渡される

###module.loaders###
####test####
ビルド対象をしていする

####include,exclude####
####loader loaders####
利用するLoaderの名前を指定する。
右から左に適用される
-loadre つけないとエラーになる

query は.babelrcにて設定が可能
=>ただしくReactが設定出来ていないとCompileエラーになる

#### query ####
loadreに渡したいパラメータ

###webpack###
"start": "webpack-dev-server "
-d
デバッグモード
--progress
progress進行状況がわかる
--colors
ログが色付き



app.jsにて定義する
module.exports = CommentBox;
↓
index.jsにて呼び出す
var CommentBox = require('./app');
app.js にてexportsしたものがCommentBoxに格納される。

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

ReactDOM.render(
  <CommentBox.box2 />,
  document.getElementById('content2')
);

###var md = new Remarkable();###
TextをHTMLに変換してくれる
・・・存在意義があまりわからない・・・・

###map() ###
渡ってきたデータなどを変数にセットするときに使う
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
