"use strict";
(function() {
  var root = this
  var previous_Code2of5Generator = root.Code2of5Generator
  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = Code2of5Generator
    }
    exports.Code2of5Generator = Code2of5Generator
  }
  else {
    root.Code2of5Generator = Code2of5Generator
  }
  Code2of5Generator.noConflict = function() {
    root.Code2of5Generator = previous_Code2of5Generator
    return Code2of5Generator
  }
}).call(this);

function Code2of5Generator(){
  var codes=[
    {
      "ascii": [
        "00"
      ],
      "bars": "10101100110010",
      "weights": "1111222211"
    },
    {
      "ascii": [
        "01"
      ],
      "bars": "10010110110100",
      "weights": "1211212112"
    },
    {
      "ascii": [
        "02"
      ],
      "bars": "10100110110100",
      "weights": "1112212112"
    },
    {
      "ascii": [
        "03"
      ],
      "bars": "10010011011010",
      "weights": "1212212111"
    },
    {
      "ascii": [
        "04"
      ],
      "bars": "10101100110100",
      "weights": "1111222112"
    },
    {
      "ascii": [
        "05"
      ],
      "bars": "10010110011010",
      "weights": "1211222111"
    },
    {
      "ascii": [
        "06"
      ],
      "bars": "10100110011010",
      "weights": "1112222111"
    },
    {
      "ascii": [
        "07"
      ],
      "bars": "10101101100100",
      "weights": "1111212212"
    },
    {
      "ascii": [
        "08"
      ],
      "bars": "10010110110010",
      "weights": "1211212211"
    },
    {
      "ascii": [
        "09"
      ],
      "bars": "10100110110010",
      "weights": "1112212211"
    },
    {
      "ascii": [
        "10"
      ],
      "bars": "11010100100110",
      "weights": "2111121221"
    },
    {
      "ascii": [
        "11"
      ],
      "bars": "11001010101100",
      "weights": "2211111122"
    },
    {
      "ascii": [
        "12"
      ],
      "bars": "11010010101100",
      "weights": "2112111122"
    },
    {
      "ascii": [
        "13"
      ],
      "bars": "11001001010110",
      "weights": "2212111121"
    },
    {
      "ascii": [
        "14"
      ],
      "bars": "11010100101100",
      "weights": "2111121122"
    },
    {
      "ascii": [
        "15"
      ],
      "bars": "11001010010110",
      "weights": "2211121121"
    },
    {
      "ascii": [
        "16"
      ],
      "bars": "11010010010110",
      "weights": "2112121121"
    },
    {
      "ascii": [
        "17"
      ],
      "bars": "11010101001100",
      "weights": "2111111222"
    },
    {
      "ascii": [
        "18"
      ],
      "bars": "11001010100110",
      "weights": "2211111221"
    },
    {
      "ascii": [
        "19"
      ],
      "bars": "11010010100110",
      "weights": "2112111221"
    },
    {
      "ascii": [
        "20"
      ],
      "bars": "10110100100110",
      "weights": "1121121221"
    },
    {
      "ascii": [
        "21"
      ],
      "bars": "10011010101100",
      "weights": "1221111122"
    },
    {
      "ascii": [
        "22"
      ],
      "bars": "10110010101100",
      "weights": "1122111122"
    },
    {
      "ascii": [
        "23"
      ],
      "bars": "10011001010110",
      "weights": "1222111121"
    },
    {
      "ascii": [
        "24"
      ],
      "bars": "10110100101100",
      "weights": "1121121122"
    },
    {
      "ascii": [
        "25"
      ],
      "bars": "10011010010110",
      "weights": "1221121121"
    },
    {
      "ascii": [
        "26"
      ],
      "bars": "10110010010110",
      "weights": "1122121121"
    },
    {
      "ascii": [
        "27"
      ],
      "bars": "10110101001100",
      "weights": "1121111222"
    },
    {
      "ascii": [
        "28"
      ],
      "bars": "10011010100110",
      "weights": "1221111221"
    },
    {
      "ascii": [
        "29"
      ],
      "bars": "10110010100110",
      "weights": "1122111221"
    },
    {
      "ascii": [
        "30"
      ],
      "bars": "11011010010010",
      "weights": "2121121211"
    },
    {
      "ascii": [
        "31"
      ],
      "bars": "11001101010100",
      "weights": "2221111112"
    },
    {
      "ascii": [
        "32"
      ],
      "bars": "11011001010100",
      "weights": "2122111112"
    },
    {
      "ascii": [
        "33"
      ],
      "bars": "11001100101010",
      "weights": "2222111111"
    },
    {
      "ascii": [
        "34"
      ],
      "bars": "11011010010100",
      "weights": "2121121112"
    },
    {
      "ascii": [
        "35"
      ],
      "bars": "11001101001010",
      "weights": "2221121111"
    },
    {
      "ascii": [
        "36"
      ],
      "bars": "11011001001010",
      "weights": "2122121111"
    },
    {
      "ascii": [
        "37"
      ],
      "bars": "11011010100100",
      "weights": "2121111212"
    },
    {
      "ascii": [
        "38"
      ],
      "bars": "11001101010010",
      "weights": "2221111211"
    },
    {
      "ascii": [
        "39"
      ],
      "bars": "11011001010010",
      "weights": "2122111211"
    },
    {
      "ascii": [
        "40"
      ],
      "bars": "10101100100110",
      "weights": "1111221221"
    },
    {
      "ascii": [
        "41"
      ],
      "bars": "10010110101100",
      "weights": "1211211122"
    },
    {
      "ascii": [
        "42"
      ],
      "bars": "10100110101100",
      "weights": "1112211122"
    },
    {
      "ascii": [
        "43"
      ],
      "bars": "10010011010110",
      "weights": "1212211121"
    },
    {
      "ascii": [
        "44"
      ],
      "bars": "10101100101100",
      "weights": "1111221122"
    },
    {
      "ascii": [
        "45"
      ],
      "bars": "10010110010110",
      "weights": "1211221121"
    },
    {
      "ascii": [
        "46"
      ],
      "bars": "10100110010110",
      "weights": "1112221121"
    },
    {
      "ascii": [
        "47"
      ],
      "bars": "10101101001100",
      "weights": "1111211222"
    },
    {
      "ascii": [
        "48"
      ],
      "bars": "10010110100110",
      "weights": "1211211221"
    },
    {
      "ascii": [
        "49"
      ],
      "bars": "10100110100110",
      "weights": "1112211221"
    },
    {
      "ascii": [
        "50"
      ],
      "bars": "11010110010010",
      "weights": "2111221211"
    },
    {
      "ascii": [
        "51"
      ],
      "bars": "11001011010100",
      "weights": "2211211112"
    },
    {
      "ascii": [
        "52"
      ],
      "bars": "11010011010100",
      "weights": "2112211112"
    },
    {
      "ascii": [
        "53"
      ],
      "bars": "11001001101010",
      "weights": "2212211111"
    },
    {
      "ascii": [
        "54"
      ],
      "bars": "11010110010100",
      "weights": "2111221112"
    },
    {
      "ascii": [
        "55"
      ],
      "bars": "11001011001010",
      "weights": "2211221111"
    },
    {
      "ascii": [
        "56"
      ],
      "bars": "11010011001010",
      "weights": "2112221111"
    },
    {
      "ascii": [
        "57"
      ],
      "bars": "11010110100100",
      "weights": "2111211212"
    },
    {
      "ascii": [
        "58"
      ],
      "bars": "11001011010010",
      "weights": "2211211211"
    },
    {
      "ascii": [
        "59"
      ],
      "bars": "11010011010010",
      "weights": "2112211211"
    },
    {
      "ascii": [
        "60"
      ],
      "bars": "10110110010010",
      "weights": "1121221211"
    },
    {
      "ascii": [
        "61"
      ],
      "bars": "10011011010100",
      "weights": "1221211112"
    },
    {
      "ascii": [
        "62"
      ],
      "bars": "10110011010100",
      "weights": "1122211112"
    },
    {
      "ascii": [
        "63"
      ],
      "bars": "10011001101010",
      "weights": "1222211111"
    },
    {
      "ascii": [
        "64"
      ],
      "bars": "10110110010100",
      "weights": "1121221112"
    },
    {
      "ascii": [
        "65"
      ],
      "bars": "10011011001010",
      "weights": "1221221111"
    },
    {
      "ascii": [
        "66"
      ],
      "bars": "10110011001010",
      "weights": "1122221111"
    },
    {
      "ascii": [
        "67"
      ],
      "bars": "10110110100100",
      "weights": "1121211212"
    },
    {
      "ascii": [
        "68"
      ],
      "bars": "10011011010010",
      "weights": "1221211211"
    },
    {
      "ascii": [
        "69"
      ],
      "bars": "10110011010010",
      "weights": "1122211211"
    },
    {
      "ascii": [
        "70"
      ],
      "bars": "10101001100110",
      "weights": "1111122221"
    },
    {
      "ascii": [
        "71"
      ],
      "bars": "10010101101100",
      "weights": "1211112122"
    },
    {
      "ascii": [
        "72"
      ],
      "bars": "10100101101100",
      "weights": "1112112122"
    },
    {
      "ascii": [
        "73"
      ],
      "bars": "10010010110110",
      "weights": "1212112121"
    },
    {
      "ascii": [
        "74"
      ],
      "bars": "10101001101100",
      "weights": "1111122122"
    },
    {
      "ascii": [
        "75"
      ],
      "bars": "10010100110110",
      "weights": "1211122121"
    },
    {
      "ascii": [
        "76"
      ],
      "bars": "10100100110110",
      "weights": "1112122121"
    },
    {
      "ascii": [
        "77"
      ],
      "bars": "10101011001100",
      "weights": "1111112222"
    },
    {
      "ascii": [
        "78"
      ],
      "bars": "10010101100110",
      "weights": "1211112221"
    },
    {
      "ascii": [
        "79"
      ],
      "bars": "10100101100110",
      "weights": "1112112221"
    },
    {
      "ascii": [
        "80"
      ],
      "bars": "11010100110010",
      "weights": "2111122211"
    },
    {
      "ascii": [
        "81"
      ],
      "bars": "11001010110100",
      "weights": "2211112112"
    },
    {
      "ascii": [
        "82"
      ],
      "bars": "11010010110100",
      "weights": "2112112112"
    },
    {
      "ascii": [
        "83"
      ],
      "bars": "11001001011010",
      "weights": "2212112111"
    },
    {
      "ascii": [
        "84"
      ],
      "bars": "11010100110100",
      "weights": "2111122112"
    },
    {
      "ascii": [
        "85"
      ],
      "bars": "11001010011010",
      "weights": "2211122111"
    },
    {
      "ascii": [
        "86"
      ],
      "bars": "11010010011010",
      "weights": "2112122111"
    },
    {
      "ascii": [
        "87"
      ],
      "bars": "11010101100100",
      "weights": "2111112212"
    },
    {
      "ascii": [
        "88"
      ],
      "bars": "11001010110010",
      "weights": "2211112211"
    },
    {
      "ascii": [
        "89"
      ],
      "bars": "11010010110010",
      "weights": "2112112211"
    },
    {
      "ascii": [
        "90"
      ],
      "bars": "10110100110010",
      "weights": "1121122211"
    },
    {
      "ascii": [
        "91"
      ],
      "bars": "10011010110100",
      "weights": "1221112112"
    },
    {
      "ascii": [
        "92"
      ],
      "bars": "10110010110100",
      "weights": "1122112112"
    },
    {
      "ascii": [
        "93"
      ],
      "bars": "10011001011010",
      "weights": "1222112111"
    },
    {
      "ascii": [
        "94"
      ],
      "bars": "10110100110100",
      "weights": "1121122112"
    },
    {
      "ascii": [
        "95"
      ],
      "bars": "10011010011010",
      "weights": "1221122111"
    },
    {
      "ascii": [
        "96"
      ],
      "bars": "10110010011010",
      "weights": "1122122111"
    },
    {
      "ascii": [
        "97"
      ],
      "bars": "10110101100100",
      "weights": "1121112212"
    },
    {
      "ascii": [
        "98"
      ],
      "bars": "10011010110010",
      "weights": "1221112211"
    },
    {
      "ascii": [
        "99"
      ],
      "bars": "10110010110010",
      "weights": "1122112211"
    },
    {
      "ascii": [
        ":",
        "start"
      ],
      "bars": "1010",
      "weights": "1111",
      "role":"ctrl"
    },
    {
      "ascii": [
        ";",
        "end"
      ],
      "bars": "1101",
      "weights": "211",
      "role":"ctrl"
    }
  ]

  this.getAllFromASCII = function (ascii){
    var code
    codes.some(function(item,index){
      item.ascii.some(function(a){
        item.code=index
        if(a===ascii) {
          code=item
          item.symbol=a
        }
      })
    })
    return code
  }.bind(this)

  this.getASCIIFromSymbol = function(code){
    var ascii
    codes.some(function(item){
        if(item.symbol===code) ascii=item.ascii[0]
    })
    return ascii
  }.bind(this)

  this.getASCIIFromCode = function(code){
    var ascii
    codes.some(function(item){
        if(item.code===code) ascii=item.ascii[0]
    })
    return ascii
  }.bind(this)

  this.encode = function(s,options){
    if(!options) options = {output:"ascii"}
    if(s.length%2==1) s="0"+s
    var tmp = ""
    for(let i =0;i<s.length;i+=2){
      var z=s[i]+s[i+1]
      if(this.getAllFromASCII(z)!=undefined){
        tmp+=z
      }
    }
    tmp = ":"+tmp+";"
    switch(options.output){
      case "ascii":
        return tmp
      break
      case "bars":
        var cs=this.getAllFromASCII(":").bars
        for(let i =0;i<s.length;i+=2){
          var z=s[i]+s[i+1]
          cs += this.getAllFromASCII(z).bars
        }
        return cs+this.getAllFromASCII(";").bars
        break
      case "weights":
        var cs=this.getAllFromASCII(":").weights
        for(let i =0;i<s.length;i+=2){
          var z=s[i]+s[i+1]
          cs += this.getAllFromASCII(z).weights
        }
        return cs+this.getAllFromASCII(";").weights
        break
      case "codes":
        var cs=[this.getAllFromASCII(":").code]
        for(let i =0;i<s.length;i+=2){
          var z=s[i]+s[i+1]
          cs.push(this.getAllFromASCII(z).code)
        }
        cs.push(this.getAllFromASCII(";").code)
        return cs
        break
      case "array":
        var cs=[":"]
        for(let i =0;i<s.length;i+=2){
          var z=s[i]+s[i+1]
          cs.push(z)
        }
        cs.push(";")
        return cs
      break
      case "all":
        var cs=[this.getAllFromASCII(":")]
        for(let i =0;i<s.length;i+=2){
          var z=s[i]+s[i+1]
          cs.push(this.getAllFromASCII(z))
        }
        cs.push(this.getAllFromASCII(";"))
        return cs
      break
    }
  }.bind(this)
}
