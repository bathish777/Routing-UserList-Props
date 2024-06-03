import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function ComboBox() {
  return (
    <div>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    <Button Group variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button>


    {/* import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() 
   */}
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="data:image/webp;base64,UklGRqYcAABXRUJQVlA4IJocAAAwdgCdASo+AT4BPpFGnUqlo6KhptWJ8LASCWdu8lg+GuktfeC1szJc7959Aljv6P14l0f4zwJ7SPZb+8+Ic7vtC8H/B7+c9QDzG7+2gL5Sve2/evUN6YXpFlH0+nvJTXSNlSkSh/a8+nvJTXSNlSkSh/a7EGwdIMhLlSkSh/a8+X3idtqe6eomhFuCAf212Pckqdk0DjHSdUn5HXt2aEG3x4r608TCye8lEnDhWtPF3j3JgtubYKW1rbTQAgtZFSI0gk0x5MtebpPUnPqYwpc91YK7dbRGnt1sCSmukbKbAk5AF2t/5UOTG4pGQOrL1TbslUREImVwp643V4rRZXu2shfPfg0+h4uSzrNRL3+kTCyaYfQC9VZV7UwKhquZRWC3tZv1YQX6XyRnwCsfTRN3KItBBMX4979I6AyNyNlSkO+oRYGfDHLm5yRDysjsCBrTulqDx50ULY/BT/JPhp9WtunpNDYZjrob1h0MlsLs7yUPlqYeFk95KZndVzjF6WWxDYXAp5MEilk+Wr+NxjSjNVFTWBnDoZ47061+vjpB2ljfnlFbaitnKv+7Ahb4SQC8aWRU10jSchk30HSpbPbL6jaArAw0rgPrqiPz1nqRSzbEKpfnTA72qg8deJfBrwUWb7nHE0p5OnDOkXVwdxrpGlNJgsBQhrPbW9zx7ujsL/fZdkA/HAXC/NZbSqyZXRlQ0HB7v2/HHHmbQBeO+YKrRmFT2VNc+ZbGwtpDUJkD2f+PTOxKBLUDzXLUqOOeqf0KCt7zwr7YFopHe8ouNqlAHObi4Xu+n095TX8Kk+xhzqmBHb8p9QQaurYkKwCNojhMja60RkSYmiEmQrWpmOlIlD+15w5IjbSBiuBlLBOJs/3IXXHlWhu3yZZFAtKZPymsXVSih9ngqGCB1pKC6jBx1TXSNlSSLZvFUJQLhEK3xtCzEz4hgm0U/CofzXY1HWuqfMTldTn9/r3M0m5cHi7eyprpGx3YeZLj6X0CCl4r0rHhmnxDW38LYENfszU+ytuoIYLbMLJ7yU10BohzW9azhNBKmiAw+GfzLjMChWvTuG3IoUcN1Ph9dRu1ZU10jSnLzFvu/IdWIy+W+8nOUDZh/qRw+BwnMYwKDpkr+Wq1+159PVAa5vjG9jsySz/Be7Egzz4XugqJxYMKRTJIt39KkTpTKt/uwCG7gCvn0zBfurT4YdSZihA/pAEML10l9O1tOthTnjZwbH61ZSgUYitFeOGLhoA51idOxN7qK4BBfx8p2HRRZkswl4AA/v+boAAAAAAKdoDt8+byuv2BrJlAJqyGsV4m7lbBynke/b33HgKOThOy3phgBRxCKBrV4SOIisWQNwAAz4J1s0yO8upElVQ17+pOMfe7+Bmt6/fYL+W8DbtcG3OnBaaenHC7N1IY8wzJW/Bpe9tQN7SP4/1XNkdrxrz4WfbsjhWDJ5gPEHf9DvM4XggO9oBAaAGkXniRASTm37/dqZyFkyFIG9RVj48cIjsl9O0Wbz1Bjp0whmNVI5/IuWZy9B7pLLqupaCZprg6pKk8hT6fsFa8f+X2wMJgrF3NtZJtBu2sjfT8MC9KZvmhnLwOHDOCsiUd4kQZOcvDnuvlt+zOYM8Rgl58kYvGwAEYS8+i9hQUaMAALri0sDccf3idOH783uzn+2EhesMuQ18rB7q2y1h2GYr8tZYJpaGclwEmXXpqD7c6msF/j/w4oj0/OEExfyQjqlXqMsrGmmfmJlCGeoDQ8U6yPzIGTZIhrUqiOU6KTaCwhizf3Dflxn14L/ZUPYC9L9t09hh/NghnhUwJrN6Mbyl60IG0DiNneEmKxdHc4y2N0Keqh5Qgese0QAzgVUwRFonM8Y6ngCUgxEFw3vloMlRriB9a2wwe7dagGW420CKFTtQGLdierRl0Wj0ZbPwaQHuTf31bFB8JnKbnwbQYt4jxCc6a4PWzdwZ9z24KsykLgKBb+qq0iJF16Pc4ODG/oA9aNfBAdLHmOUjX9Mfc8Z0xx8OEh0jtusY1u9bOSkWquCQnqnL2CW5ZTWXjuRthenI8empUVnvu4gaT8WsS+55Ol6/W93VPy9VMz6065vrd5Yx1dXlvzxixg8Io53RUczJcZ8VGZfggMDrglJwO1xGddZdqbEaHXtYTgH60Nz+ygCPSg1ILLbHdS25G5JFccaViaCrgIF08NrlaTOsRa0sFlIIrhxK3V/blOhRIjsO8OTpZmu6xGuImQYzXWJQ0iyWi3oWLqSnnL5RYfteIbv5yWdhHrE7KGTuPvuk4xRSENh4S+vlJFmFpbBkuFbwMUVyUYXVUKyZm9N9oSztnjMT3I9+OzkcO2gfKTiTEuGyKCjLoz3mhDlaUsXndoc/zeY3XxYM0bJgbl5u359i08Wz8VO5tSQmHTD9cs2Wpp2q2/UuIGuTDsul2IprJESZcIP2cergcKT7YEJSR7w/EU+5pI1oD92TablUQ9VoDcaI1PoV8jXEmxw4yTynN5AvTk1q3DaBPObvGR4g4kL1lFig+dTs9Xqd0GsHIMm/OzhGPL9SRTzWlBhXI10JXxRFvdHYNNK0a2byxVEN6P94sdd6WycURNG/gRozQVSdqHzlepUMaUtdstkCDwPlJi0jcDK8MmJYQDRxWjmabnkMKUA3GFe97W9zSM5LSDXSDKVg93sthXNGtcqS+0U+2NFVXYLOmQoe/C1MQmi1C24HLHnnHpE2TELubCCi6eiM8HAgDaBRcif6cnNmhc4HshF/UziaqH/tygEBVnIQZK5F+8BVaxgwr2xgtOhn15YVHd6m/EGiW1fVt36CmPSdm9kwNO3md5qnGM85JsJiIxHM4xNRFCFZ7ym2Xp41WVtHKw8l98RC6tM3T6yRG3MdaIwn05iegXgnUEbaih3KuxaoljiacMtX13HXmC0O1hckELON5W2+W39/c6nT+ZXXN05KTmJQS4SWmG8itoZmQQogAy5+ehnoPLz8mUTytdn3+a3y7fqMBZNzXXd+TGeCY/1MTfXn5+RwcLfVnAFDhLCTtirPohDUPPmeczY9TP8NSxpiU1sAFX2+MbH8YMpv1un5tyZ7v20ALOlFgAEwm9fgZk5cCr0Kn4TNwbxOOfisnXPkiniszQKTvWUdCsswI/rBS92YFzAa39L3WdEMac+jyKNh/zluLtL79omexu1/ddCuKGlcQtVowpug4arEZNGzmVKzjzZizHCZiU0IEtD20jAmjrkuFzkn6TduGgH655IbVWRS7dosnSIQqb5TNdQ9+Wglbv5JtjADQ6HIr+f4hGkLdFGxcn5/jQpzs5yHHvup0IrKdOpwzI/TgWyzZte5EOjFRWDlh9fst824ifKSve7OO+K4pE4BDgfsuxNF4XeS5jW0c+Khh4ElSbk66wU7TRW+sEU8h1XRqDsHvwN1jIYizHuh7+2ApZrzdHPyZdSHK4Jukf51nKB4RBEwKo50z2yecUTNtigK9PRSWZJCJ4mvJ7RGIXSlFyrsQ0ZepfoGZvH0V+uYHWiLAVPopNSk5WMAk8ORq80/bAxOVIz+1GTkgkfyj7B96kgPNLmgzMi9CW7NKgSFpJuhxD5C+uirqxMCBZeGAV3VMQRaH84AmxoVXjFeiedpkMWqZzHiWkbqmQFYcBcTYwpBuzE43YQ2COO5eB0E+ZES5MPwv0OEYc6U4GPU+7P89YULNodAljRfylsY7XiGQH1h1WnKVjLu0h2tynLiUmUCXlQ81u1JkIMj5Xn7gM+BryhyEgve5/d01WoQarypzPiJkOl3xDCvcldxYWUSW/rpPFA6Sa3K/WltVymRBVFoldYEN008ll+xK5kw4Zb4PSygyq76Oums4itFcIvu6ToCWgf3cawhYarbKoi5kBqbKVItgNS7WVJxIx8kCuN/XgWiZuytJNZ/Uj/BupTBvgT6anhffP4UYSOJvd1BGrbtCIL19GPUt0DaMyqnyX5inyfYmotY2lzSS9aX1x5ssUi+7pyR/cXs+Kn7ONuW2elnI/goTXudNknfpDFbYAIlS87maTii4qcvnUZFg7c7BFyqPw6bm0TJJBdB5BU9hrr2el5kmp6H0wYFlU7P3EJEjjBHIK0ppJ6vieQ83uinZBQDFcSapf+k9F5KbqeZydlbGgPPEObIcDARuMk4n4cHeN712inSUvWhkGMUdKKMGDk2HcQ0PWBwb58J+fE2on8brwPWWmwV7z5zka8lUum1+xCXIMGlH41XFtQG47VB46h2rNZXKCJF1MZyKNyX1k7X7G29bB7HlUJSGWieNB055EP1cGSrag5mueQe2HZ911R6gR2N8xqb8pikf0uEl05IT6Y+7UvHcnvYgf3WW2lSueo3G2n5GWxllnUQHqJTcqkaJbed3I15imbbQ4DtzJ6GgQzyF9NuHnnR3LVtguRzqM8NXyWVOhYICm9ZmkX3jy3c5/Hvwa/gpzMIV1BcJkdbaX7gIr0ehjYqCcjh05P3P00PBWV947RQTw8zXcdj4j/wSinGMB83otWQ6UOVoDanUFJjn+C3KulRyYqihcvmHozVibw30nNSz0l9/DWP8+GHCzGoH7AuOdtsaSId0r1BnAf5TOb7cpytiLipuS4klR5PUEmey+7gUDBmTC12IGGdVOk5vHAIZH/DCWvlyTeikx0inXv+EsO+Z6POEKRovkgA6YARF8uI6V4yjz0pRx6/L4rm0XHvVKvoRjjgGDuf9MJGsw7+cDbK78YuDLx/I5dvv9q3s62ZNUYMCooHntQL9wF2DjlIHjokMg8E3d8VABH9JRMqjE+TtAVrhfn4bzeNtHfF5NAjwkxBncmXuEHBAaILtiOw8+Hv4HwHFqaRp508OIU0MmaoIL2fTuXu0F70OqmjYM/PJn9cIdM7h9sE2fAL/QNThzXvyn6IIhnQPiwCWlUcr4PVfwUd3dVx+Z5/AaY9llh5EiSDDGQi49S1r88t3gRn7v72SA9XCJ+QpILbvD5o6lws+6ssZsfFD7iOaSpPHbK4FIVz7raP7Kj4UNABU6AvceyEXGgnmF4IKgSdEmEpQqwEyd8t9wogHzIhgNFfUhVptnjbylvnIXdNNoN3XfWmBI5RrL81mRTfk0eWQMuaP0ItzijkTDDmRJhSgBos6l7giqYHTt1aVhDRA1x6W3rQTD6rwak8wq1NoUhLX8EkN+ebkhrv8IaB9veQUWMmg5OgboL7LC/sBK902gk8ZRb6sI0KPZ3Mpo/tHDt9MOYov3yzKsuySxaNUhDsJqvVe8aY4VxIJmTliD+3/wvJT2RhijzWh4aBFbvLlH8ZsGZ5aq/E1hUXew7Pq6+NOpOX4N0ALXkngXZlBV7eCS5lQH+G5LEGJlfb6n4LZ1JSoRHJOhHl8Kvhr7QWBlAadb9zsnCtcctu2zgocyBxjJgGe8qDpP4Ed6UewqA7PVwT7FyXFG+svqQW9uyAYtMO8u9vZtDQxlP1l5HD/cgpAFGtd3kDrMKac72Cgu9WHOK3JSByuK2k19VRN5KKxo0WlcjxfZr8h6gzfoR/fwlIfSBrb3mZK3n2Sk9bSN4+SgR1w4LMmzjYWjlVrj69wgZRlle3ZS7Jg9oZhZG7+C1bRbv9Alc4KXwiLkoBUXb5gi7dj5TAeJGbsmTRQ0fIhfZ+Q1jZFSijX8dJOb0uYPOOl+u8cC5oVY3k8YBlDjW7fj7/2nULhwz4+sVHGoW88ZB0xQNtH9QYY4so1m4D5AHqykdWBvyXOEqlGdFPmaQm5BhKO+7+ZyZuWOAlnfY/J+79K68rUYjBCjXalz3HOkixuUNwWSdzRx+YorqyDcJ3OsFybZ7sLjRNZiLBk5+MtHV5Hj9q+hlCySYF0i8qKmnzjY6YGLJfL2KJ2fQFnzjmCI1uYkya9VS5l5N85cUuxgAfcDhAGwfM8Q4ytsdCXBaOUOGrFnzUW+i4rAsxN9It0UZ0O24p0G4zA2OdNfpG+HWBicFJL4vykrASfugdp6UY0/Fkw51+NdSb7782VkeAkibqUicGVGInVsX4q2io750OW2aEhvOqbRB1VTvarKD3LTjSYEGnbIyjFThTUQSlR2SQSle81BQ4Yg60Km0paM5BLcAqvCjw6BNjSyoemtHIwTqRCibY/6cefNNV4NODju6BLBavX0N0xgFle3XB0HNslaDZmSXW9dDK/9UfYiAyvqMUXvQNzKEE+0ysXgTFtJMlC8ZQ/0apPKLwAD7T8+bfmWFUWtbQ47dNyRO1i7W6cHYDJFnyrw5zNKvZCcVw+fd1/Z6yna1JgLGAg7ofO/XEpnjGuBy5tWtrSdECXXa5HzfsvtGPzEg0LOHBsesxtMk5Y42s2gNRzZ29oKhAC9Vpo8wE3jP0nWwyo8JyB2dZJDrdM93fSYMiKiXm+991LYVx1Tyh6G/sEE6+RoMS5ht3I/PosSlSu32eIBWKT54ztmvVEzUNrqH2L6/dCc3b3KjsBqAopnaKG9dXRQnI71F3fMlMOe7ELd3DsBHY/UabMA2PXR/r7+uSpKm3JiobD11tWGS94nxHRbRNiKbVzHZbt+pUFXaRlJmnmW9GN6zXCXsDj0b6tD0ncTGznBtJVFE/TkIWAQNFlghIaAj6RtpkBJaxvKU3iVHgQ8lqQ8/SI78Gxmo1k4a7wCyaGv5R9MyNBPH9JXJ5j72S+bH9Z9AEdq3WC7esCfxE5sWaWeSgU6MhyO8xHgq24j385b+dh1sqTkk6mdA7DtIqTnjj3DtNfs4d/8X9kFhjC2nukwFHvoqQZzQs9y00JpQLnyPAwB/VtHrZKplIEFEctfkshX6/P7v2B0P1U2W/8ge8MSDaswDKmA4zpz4wp4InvEvtMQcXmVHBjzJxQb37Uz/3eArpPrbWxONOFwDJYIJ0U8WNB604+/5UVP/Da07UMKFvAmxkJ43G6OPzjmFTFIimsCDw1nHRIrUH3B6EEzalDaNk2mevv2uyNU4IoMMAzISw8YfzPXwVLhikOa404pWyBDbdcfE23kuPW6Nlh1R+RTgh0bnM5NkgMZ1wKZ6STP6lxLvvg172rKMVSjflHrFtJSV2EUovnEnwycdRYN+7KI9ZBLU/7/gxegQJsM3gFhzJBCDu3oX+Uh/gbg8DHio3sIYsoEfUR4D/58+x/5wvLTU5Ub8QgZ5pDYRHH8Y7G1DgjJpv95YiWmzi6UL+m/UsDafWbfvJhbOG5I2wY6Z1c00b9newNIEzobJ6rKT/aeP7Jf5qtYigXibi1/2TwRbJ17mURtjBiZVtT8nbIQ5Mhm7Lg/h/oBArvcCsaJrzSdwJVwPNGeqMV966hzjvIuKGQ9y45LC7uz6oADl1cmQh4AatdxfgtnlqzR4g2mnJ4CmHMGfOzytrSAPOQzKveJijKkb6DNaXtuRvG1yRR/cOMQMBm2D/DLtfzjrDifduz7Ule9j79/HoGtY6BOrkjEiOp0U9Q0ubVebps5hQS5FzH+bYQ7Y2mPvmcLATupt5v6jO3N3FZcZbCskleS2QrbDk611SjXb9Rfq4T4Gt5vd4ziOtZBsT3uyKd6BlsiLSz1HnbScniF4mdqM0SqFQJFFAcacOsXWI3jmfnqzIuByAUMXt9GhF+7dUrz69WOm17TL7aAGXIZOH7GYp/YTCZQbAN5Aa6/MjnaCG82XkWigrz76yUxtDU96T7xRlm5CYU8yjG0MqGByns3zDloS70nyfmVQUd2ltk6bgfVRFo7zJpVTu6WZVC6a76ipTenw2zv6qIuLehaLBGHaYixzBO8QfztphDtqbv5EguejNLqNgZLC300cZfHkKjJw0y9qzdxDZtAfaBpm0B08KYcS9tnMoTWbfsxJEUe/Q6v95ksZtxdIybhhOu6al+oAmuojJW5Oidc8oDnRLYJlYEWXVRXkedGMaNZbNA7Nv3aM1v6NzjbwqFJ5nB8JNAEZJqjpHgaZlKxbYu3Q53Uwl1UbG+AZMfBUK9YnEUzOUjMptqAPIbDRecTYClDigi1jNMJ9ariXyH2br5E5MNNWDsFb1Lc+p8c+vsMiWDTcsW5OnSlAl+F/l9LQmOkOyuBiLr1/NGAUtt603DaG/62rU3V73tO85bO44zJPp1+x3GrJ35CxFbEPClqkvS+IUfgDWRhg9TbCksVoZsG4yv5JK1o1u3ket6LClWY8lTlg/3vc8ZpmHqbqLxGjiFqvphkcNz7aJ/KNfek90ypn8ZnndReB2b87r0gMEXJSmA5X5GrcT4kskQ3KyL+rwZ6lCocZtmUxg6hwFCfrZvCug2TdZ3wqmGs0rtZuJel78ftweKBm/X6pNs/Cjunv7ciS7WvrQ4r8kV532vvOejMBV397/ZehXMaBMBpuxNKqpaMT0pbzGyNNyFgSOmzvDoOIACLhEjxffaylMHZeZdQdhRVdfQy9/wORN8/cwHbyi4+35OGIwZu3uGF4YWPXTH+rufn49eCtSFPKtkm85JcLkibwIGuckKeLrbwAuCLtMqtYhmoETo6Dgc5e2PfGcQG3/JI1YFoGy2TAz9+CRYIY70YAlhtBWgX+wwk6moh+1NEduyiF3wHBOD0h2POVGaY8azFkbGWawq3NwWQ+GybVFll+dUT8Zcjef2+1mnbuAsJLFzTqbNugOxNZzVWwTpdNfRCJte72gjocaTLow+cNQfuwoffHHrSYWRCW846U/Wx/VkoabAdPL72sjfYtuj+LrV9BKJB2sBvsfi8bnAoiZVDxMK4/DvhvT0wncaTxgyBj1JLtri6GuLeWnJUM46ecDyRhY2xC4iMQ5UcKn8qJ6khXLkX8lAmBWjmzj00rYAmHdVASCaAQOlXjLBb9RjN77qEoPyI8q+gMyrHXQm+BgOPKRXEf5r8EI16DS9MdfZytKpZL+gR7M6nFidR0yW/zkaoMszbXSBiWWxXTk2r9lNI3hULt+tzeP2TPhIo7XAn8ihkFofU6n2TZgJZIhELt7txIC8agtSDBzhVFo5kDf9cTKz8WhqkHEillH0+bzMuivCFvkMDdUzJPxzPDMYF+BItwAgAAoq2yMUs5lX4JjuzehJvYn45ZbKrV6vBE9+vbSyudnnQhHpeytpBegjZz2D52rh3/0o59sZ7SnutXz/w4vQJ8E43toGqe/oVOmT1bOv9bxGJOUt/ehxmudpQF9m0qSYIYFeVHMuA971ycYe8liLswT4Eth7lCYsinlACuVOtmj2CisfOSgUlTr0ivxvr+ZbH7evvlgaD7a0fhT/9bCk9j0UbnEFhevFdF/y88aBRs8r/gatP4w5rg0TXCjMbGAryPzaDT4fifjtebfG/HWmSDOAyn6YViBWg6m8iSfHGYh88ooIUWPU9rCnmzYP5mzATuh8Of6zKHAkqF4N7uBj4HHln7gEYscT9wvoSM7qeT7V5rW6fIoTaHFi5XNJJz1xVp5MFZYp9Hz9HonQ+zChshTD7KxgbplucBRUqJgy7f6GwvSrQ1ymjzWy+JV452FMfNi5rLC4IPgXEWnOAZ9cVfJOH2Uc+/SMtPAh2w+0L2QGqVPO6qKVZ8UxKIptG4dl24hxMk9sWU0DaQD3YOh9O5fKLblZ0GgPYx+eGBD2MqVpwNDYCGYL5JjHPfNmp6ErxAHmato9AAnz+t53ne7QTbKpjcknlAkpjAZjGAhDABrFvNdP7ku8oVxPkbl08Vy9o4I7bCtRcKat68jdzuG2ikWt6512PtbAIaKKu6dzS6xOqVFNAdGq7sBGV3j0OBAarY3kz/vYs1bSeV/4jhnfs2DdRG/wV945FLJ3haItLvJfWy4a8mKR2QKB/wE4v/uMSkvfZ/z160AAAA==" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  

    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

