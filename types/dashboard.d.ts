export interface DashboardComponentListItemProps {
  label: string;
  route?: string;
}

export interface DashboardComponentListProps {
  label: string;
  items?: DashboardComponentListItemProps[];
}
