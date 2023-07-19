import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Button, VariantButton } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { ButtonSize } from "@/shared/const/common";
import css from "./RatingCard.module.scss";

interface IRatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(
  ({
    className,
    onAccept,
    feedbackTitle,
    hasFeedback = true,
    onCancel,
    title,
    rate = 0,
  }: IRatingCardProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept]
    );

    const acceptHandle = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    return (
      <Card className={className}>
        <VStack align="center" gap="6">
          <Text title={starsCount ? t("Спасибо за оценку!") : title} />

          <StarRating
            selectedStars={starsCount}
            size={40}
            onSelect={onSelectStars}
          />
        </VStack>

        <Modal isOpen={isModalOpen} closeModalHandler={cancelHandle} lazy>
          <Text title={feedbackTitle} />

          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t("Ваш отзыв")}
          />

          <Button
            className={css.modal_send}
            onClick={acceptHandle}
            size={ButtonSize.M}
          >
            {t("Отправить")}
          </Button>
        </Modal>
      </Card>
    );
  }
);
