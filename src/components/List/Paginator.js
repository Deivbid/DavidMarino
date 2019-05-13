const Paginator = (items, page) => {
  const cPage = page || 1
  const perPage = 20;
  const offset = (cPage - 1) * perPage;
 
  const paginatedItems = items.slice(offset).slice(0, perPage);
  const totalPages = Math.ceil(items.length / perPage);
  return {
    page: cPage,
    per_page: perPage,
    pre_page: cPage - 1 ? cPage - 1 : null,
    next_page: (totalPages > cPage) ? cPage + 1 : null,
    total: items.length,
    total_pages: totalPages,
    data: paginatedItems
  };
}

export { Paginator }