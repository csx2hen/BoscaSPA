import React from 'react';
import Icon from '@ant-design/icons';
import './FileTypeIcon.css';
import {ReactComponent as AiSvg} from '../../assets/icons/FileTypes/ai.svg';
import {ReactComponent as AviSvg} from '../../assets/icons/FileTypes/avi.svg';
import {ReactComponent as CompressedSvg} from '../../assets/icons/FileTypes/compressed.svg';
import {ReactComponent as CssSvg} from '../../assets/icons/FileTypes/css.svg';
import {ReactComponent as CsvSvg} from '../../assets/icons/FileTypes/csv.svg';
import {ReactComponent as DbfSvg} from '../../assets/icons/FileTypes/dbf.svg';
import {ReactComponent as DocSvg} from '../../assets/icons/FileTypes/doc.svg';
import {ReactComponent as DwgSvg} from '../../assets/icons/FileTypes/dwg.svg';
import {ReactComponent as ExeSvg} from '../../assets/icons/FileTypes/exe.svg';
import {ReactComponent as FileSvg} from '../../assets/icons/FileTypes/file.svg';
import {ReactComponent as FlaSvg} from '../../assets/icons/FileTypes/fla.svg';
import {ReactComponent as HtmlSvg} from '../../assets/icons/FileTypes/html.svg';
import {ReactComponent as IsoSvg} from '../../assets/icons/FileTypes/iso.svg';
import {ReactComponent as JsSvg} from '../../assets/icons/FileTypes/javascript.svg';
import {ReactComponent as JpsSvg} from '../../assets/icons/FileTypes/jpg.svg';
import {ReactComponent as JsonSvg} from '../../assets/icons/FileTypes/json-file.svg';
import {ReactComponent as Mp3Svg} from '../../assets/icons/FileTypes/mp3.svg';
import {ReactComponent as Mp4Svg} from '../../assets/icons/FileTypes/mp4.svg';
import {ReactComponent as PdfSvg} from '../../assets/icons/FileTypes/pdf.svg';
import {ReactComponent as PngSvg} from '../../assets/icons/FileTypes/png.svg';
import {ReactComponent as PptSvg} from '../../assets/icons/FileTypes/ppt.svg';
import {ReactComponent as PsdSvg} from '../../assets/icons/FileTypes/psd.svg';
import {ReactComponent as RtfSvg} from '../../assets/icons/FileTypes/rtf.svg';
import {ReactComponent as SvgSvg} from '../../assets/icons/FileTypes/svg.svg';
import {ReactComponent as TxtSvg} from '../../assets/icons/FileTypes/txt.svg';
import {ReactComponent as XlsSvg} from '../../assets/icons/FileTypes/xls.svg';
import {ReactComponent as XmlSvg} from '../../assets/icons/FileTypes/xml.svg';
import {ReactComponent as ZipSvg} from '../../assets/icons/FileTypes/zip.svg';

const FileTypeIcon = (props) => {

  let icon = null;
  const fileNameComponent = props.fileName.toLowerCase().split('.');
  let fileType = '';
  if (fileNameComponent.length !== 1) {
    fileType = fileNameComponent[fileNameComponent.length - 1];
  }

  switch (fileType) {
    case 'ai':
      icon = AiSvg;
      break;
    case 'avi':
      icon = AviSvg;
      break;
    case 'rar':
    case '7z':
    case 'pkg':
      icon = CompressedSvg;
      break;
    case 'css':
      icon = CssSvg;
      break;
    case 'csv':
      icon = CsvSvg;
      break;
    case 'dbf':
      icon = DbfSvg;
      break;
    case 'doc':
    case 'docx':
      icon = DocSvg;
      break;
    case 'dwg':
      icon = DwgSvg;
      break;
    case 'exe':
      icon = ExeSvg;
      break;
    case 'fla':
      icon = FlaSvg;
      break;
    case 'html':
      icon = HtmlSvg;
      break;
    case 'iso':
      icon = IsoSvg;
      break;
    case 'js':
      icon = JsSvg;
      break;
    case 'jpg':
    case 'jpeg':
      icon = JpsSvg;
      break;
    case 'json':
      icon = JsonSvg;
      break;
    case 'mp3':
      icon = Mp3Svg;
      break;
    case 'mp4':
      icon = Mp4Svg;
      break;
    case 'pdf':
      icon = PdfSvg;
      break;
    case 'png':
      icon = PngSvg;
      break;
    case 'ppt':
    case 'pptx':
      icon = PptSvg;
      break;
    case 'psd':
      icon = PsdSvg;
      break;
    case 'rtf':
      icon = RtfSvg;
      break;
    case 'svg':
      icon = SvgSvg;
      break;
    case 'txt':
    case 'text':
      icon = TxtSvg;
      break;
    case 'xls':
    case 'xlsx':
      icon = XlsSvg;
      break;
    case 'xml':
      icon = XmlSvg;
      break;
    case 'zip':
      icon = ZipSvg;
      break;
    default:
      icon = FileSvg;
  }

  return (
    <Icon id="file-type-icon" component={icon}/>
  );
};

export default FileTypeIcon;