import {marked} from 'marked';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: false, linkify: true });


export function markdownToHtml(markdown: string): string | Promise<string> {
  if (!markdown) return '';
  return md.render(markdown || '');
}
