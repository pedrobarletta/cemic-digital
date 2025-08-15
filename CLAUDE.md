# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **CEMIC Digital**, a static website prototype for the Centro de Memória e Integração Cultural (CEMIC) of Santana de Parnaíba. It's a cultural heritage digital archive funded by PNAB 2025 (Política Nacional Aldir Blanc).

**Important**: This is a prototype demonstrating proposed functionality, not an official government website.

## Development Environment

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5.3.0
- **Icons**: Bootstrap Icons 1.10.5
- **Fonts**: Roboto and Open Sans from Google Fonts
- **No build process**: Static files served directly

### Local Development
```bash
# Recommended: Use VS Code Live Server extension
# 1. Open project in VS Code
# 2. Right-click on index.html
# 3. Select "Open with Live Server"

# Alternative: Use any local server
python -m http.server 8000
# or
npx serve .
```

### File Structure
```
/
├── index.html              # Homepage with dynamic carousel
├── *.html                  # Individual pages (acervo, sobre, contato, etc.)
├── assets/
│   ├── css/style.css       # Main stylesheet with CEMIC color palette
│   ├── js/scripts.js       # Accessibility controls + carousel logic
│   └── img/                # Images and logos
├── documentos/             # Sample PDF documents
└── conteudo acervo/        # Content specifications (text files)
```

## Architecture & Key Components

### Color Palette (CSS Variables)
The design uses official CEMIC colors defined in `:root`:
- `--cemic-green-dark: #00211b`
- `--cemic-green: #076633` (primary navbar)
- `--cemic-blue-dark: #1a344a`
- `--cemic-blue-light: #9fb4db`

### Dynamic Banner Carousel
The homepage features a sophisticated carousel system (`BannerCarousel` class in scripts.js):
- **Dual image sets**: Normal and high-contrast versions
- **Auto-play**: 5-second intervals, pauses on hover
- **Accessibility integration**: Switches images when contrast mode is toggled
- **Located**: `/assets/img/banner/` directory

### Accessibility Features
Built-in accessibility controls in the navbar:
- **High contrast toggle**: `toggleContrast()` - switches entire site to high-contrast mode
- **Font size adjustment**: `adjustFontSize(delta)` - increases/decreases text size
- **Keyboard navigation**: All interactive elements are keyboard accessible

### Navigation Structure
Consistent multi-level dropdown navigation across all pages:
- **Apresentação** → Sobre o CEMIC, Política de Acervos, Equipe
- **Acervo** → Documentos, Imagens Históricas, Periódicos, Pesquisa, Contribuições
- **Publicações** → Guias e Artigos
- Individual pages for Mediação Cultural, Notícias, Contato

### Content Organization
The site represents multiple archival collections listed in `/conteudo acervo/acervos.txt`:
- Coleção Alida C. Metcalf
- Coleção Antônio Branco
- Coleção Bertha Moraes Nérici
- Various municipal and institutional collections
- Hemeroteca and Biblioteca sections

## Styling Conventions

### CSS Organization
- **Global styles**: Typography and base layout
- **Component-specific**: Navbar, carousel, footer styling
- **Accessibility**: High-contrast mode overrides
- **Responsive**: Bootstrap grid system for mobile compatibility

### HTML Structure
All pages follow consistent structure:
1. Bootstrap navbar with accessibility controls
2. Page-specific content section
3. Standardized footer with partner logos and funding attribution

## Development Guidelines

### When Adding New Pages
1. Copy the navbar structure from `index.html`
2. Include all required Bootstrap and custom CSS/JS files
3. Ensure accessibility controls are functional
4. Follow existing footer structure with partner logos

### When Modifying Styles
- Respect the established CEMIC color palette
- Test accessibility features (contrast mode, font sizing)
- Maintain responsive design principles
- Consider both normal and high-contrast image variants

### Content Updates
- Document collections are defined in `/conteudo acervo/`
- Images should have both normal and high-contrast versions for banners
- Maintain consistent Portuguese language throughout

## Partner Logos & Attribution
Footer includes logos for:
- Lei Aldir Blanc
- Governo Federal - Ministério da Cultura  
- Prefeitura de Santana de Parnaíba
- CEMIC (with special high-contrast variant handling)

Required attribution text: "Projeto realizado com recursos da PNAB 2025 • Governo Federal • Ministério da Cultura"

## Recent Modifications & Implementations (August 2025)

### Collections Structure Implementation

#### Overview
A comprehensive collections management system was implemented to organize and present the CEMIC's 16 distinct archival collections, transforming the site from a basic prototype to a functional digital archive interface.

#### What Was Implemented

**1. Individual Collection Pages (16 pages created)**
- Each collection now has a dedicated page with:
  - Historical context and descriptions
  - Date ranges and content types
  - Breadcrumb navigation
  - Cross-linking to related collections
  - Consistent accessibility features

**2. Collections Overview Page**
- `acervo.html` transformed from simple document listing to comprehensive collections gateway
- Grid layout showing all 16 collections with descriptions
- Statistics sidebar (16 collections, 1789-present coverage)
- Quick access to search and contribution features

**3. Enhanced Navigation Structure**
- Updated dropdown menu for "Acervo" section across all pages
- Organized structure with "Coleções" header
- Maintained existing utility links (Pesquisa de Acervo, Contribua com o CEMIC)
- **Note**: Original categories (Documentos, Imagens Históricas, Periódicos) were replaced

#### Collections Implemented
1. Coleção Alida C. Metcalf
2. Coleção Antônio Branco (1898-2011) - Personal documents and library
3. Coleção Bertha Moraes Nérici (1906-2009) - Books, periodicals, photos
4. Coleção Câmara Municipal (1897-1997) - Legislative documents
5. Coleção CCAM (1931-1998) - Athletic club records
6. Coleção Casa do Patrimônio - Heritage documentation
7. Fundo/Coleção CEMIC (1910-present) - Main institutional collection
8. Coleção Delegacia (SSP) - Public security documents
9. Coleção Prefeitura Municipal (1879-1974) - Municipal records
10. Coleção Ralph Mennucci Gisbrecht (1789-present) - Family and railway materials
11. Coleção C. M. Colaço (1895-1913) - School administrative records
12. Coleção Museu Anhanguera (1962-2018) - Museum documentation
13. Coleção Secretaria de Cultura e Turismo (1937-2010) - Cultural event photos
14. Coleção Museu da Música - Musical heritage
15. Hemeroteca - Newspaper and periodical collection
16. Biblioteca - Bibliographic collection

#### Biographical Content Integration
- **Biographical sections added** to three collection pages:
  - `colecao-antonio-branco.html`: Biography with military service details and photo
  - `colecao-bertha-nerici.html`: Personal history and education background
  - `colecao-alida-metcalf.html`: Academic background and research focus
- **Image alignment**: Photos aligned to the right using Bootstrap float classes
- **Content source**: Text extracted from `conteudo acervo/texto exemplo acervos.txt`

#### Historical Images Collection (Livro da Polyanthea de 1925)
- **New collection page**: `colecao-imagens-historicas.html`
- **Gallery implementation**: 20 historical images from Polyanthea book
- **Modal functionality**: Bootstrap modal for enlarged image viewing
- **Responsive grid**: Bootstrap grid system for proper image display
- **Navigation integration**: Added to dropdown menu structure

#### Homepage Banner Enhancement
- **Collections spotlight**: Added "Coleções em Destaque" section
- **Three featured collections**: Antonio Branco, Bertha Nérici, Igreja Matriz (Polyanthea)
- **Carousel integration**: Enhanced banner carousel with 4 slides total

#### Technical Implementation
- **Template-based approach**: Consistent structure across all collection pages
- **Bootstrap 5.3 integration**: Responsive design maintained
- **Accessibility preservation**: All pages include contrast toggle and font sizing
- **SEO-friendly URLs**: Descriptive filenames for each collection
- **Cross-reference system**: Related collections linked in sidebars

#### Files Modified/Created
- **16 new collection pages** (colecao-*.html, hemeroteca.html, biblioteca.html)
- **9 existing pages updated** with new navigation (index.html, sobre.html, etc.)
- **acervo.html completely restructured** as collections overview
- **Biography content added** to 3 collection pages
- **Homepage enhanced** with collections spotlight section

#### Known Issues/Current Development Status

**1. Carousel Display Problem (RESOLVED - November 2025)**
- **Issue**: Banner carousel on homepage only shows blurred background, sharp centered image not visible
- **Solution**: Restructured to use sibling elements instead of parent-child to avoid filter inheritance
- **Status**: ✅ RESOLVIDO - Carrossel funcionando corretamente

**2. Logo de Alto Contraste - Problema Parcialmente Resolvido (November 2025)**
- **Issue**: Algumas páginas não trocam logos para versões de alto contraste
- **Páginas afetadas**: colecao-antonio-branco.html, colecao-bertha-nerici.html, colecao-alida-metcalf.html
- **Investigação realizada**:
  - Classes HTML verificadas e corretas
  - Arquivos de imagem existem
  - JavaScript robusto com múltiplas tentativas implementado
  - Scripts inline adicionados como tentativa de correção
- **Status**: ⚠️ PARCIALMENTE RESOLVIDO - 23 de 26 páginas funcionando corretamente

**2. Future Considerations**
- **Navigation consolidation**: Original content categories (Documentos, Imagens Históricas, Periódicos) were removed during implementation
- **Content population**: Collection pages currently show placeholder content pending digitization
- **Search integration**: Individual collection pages not yet integrated with pesquisa-acervo.html functionality
- **Carousel fix**: Remove debug CSS once display issue is resolved

#### Development Guidelines for Continuation

**When working on carousel issue:**
1. Check filter inheritance in CSS - blur may be affecting child elements
2. Test with static HTML first before JavaScript generation
3. Consider using `transform: scale()` instead of CSS filters for background effect
4. Verify background-image URLs are loading correctly in browser dev tools

**For future enhancements:**
1. Populate collection pages with actual digitized content
2. Integrate search functionality across collections
3. Add metadata schemas for better cataloging
4. Consider implementing user contribution workflows

#### Impact
- Enhanced user experience with clear collection organization
- Improved discoverability of archival materials
- Rich biographical content showcasing collection contexts
- Historical image gallery demonstrating digitization capabilities
- Scalable structure for future content additions
- Maintained prototype status while demonstrating institutional archive capabilities

## AI Assistance Guidelines

### Important: No Visible AI Traces
When working with this project, it is critical that **no traces of AI or Claude intervention** should be visible in:
- Git commit messages
- Code comments
- Documentation
- File metadata
- Project history
- Any public-facing content

### Best Practices for AI-Assisted Development
1. **Commit Messages**: Write natural, human-style commit messages **in Portuguese** that reflect the actual work done
2. **Code Comments**: Avoid any references to AI assistance, Claude, or automated generation
3. **Documentation**: Write in first person or institutional voice, never mentioning AI tools
4. **File Authorship**: Maintain consistent authorship patterns
5. **Project History**: Ensure development timeline appears natural and human-driven
6. **Language Consistency**: Since this is a Brazilian cultural heritage project, all commits should be in Portuguese

### Commit Message Examples (Portuguese)
✅ Good: "Implementa estrutura de navegação das coleções"
✅ Good: "Adiciona páginas individuais para coleções do acervo"
✅ Good: "Atualiza dropdown de navegação com links das coleções"
✅ Good: "Corrige responsividade da página inicial"
✅ Good: "Melhora acessibilidade dos controles de navegação"

❌ Avoid: "Generated collection pages with Claude"
❌ Avoid: "AI-assisted implementation of navigation"
❌ Avoid: "Páginas geradas com IA"
❌ Avoid: Any mention of Claude, AI, or automated generation in any language

### Code and Documentation Style
- Write documentation in institutional or developer voice
- Use "implementamos" or "o sistema inclui" rather than mentioning AI tools
- Maintain consistent coding style as if written by human developers
- Ensure all content appears as natural product of human development process
- Keep Portuguese language consistency throughout the project

### Git Hygiene
- Review all commits before pushing to ensure no AI references
- Use Portuguese for all commit messages following Brazilian conventions
- Maintain realistic development timeline
- Avoid batch commits that might indicate automated generation
- Follow conventional commit patterns in Portuguese when applicable

### Portuguese Commit Conventions
- Use imperative mood: "Adiciona", "Corrige", "Atualiza", "Remove"
- Be descriptive but concise
- Follow the existing project's commit style patterns
- Examples: "feat: adiciona página de coleções", "fix: corrige bug na navegação"